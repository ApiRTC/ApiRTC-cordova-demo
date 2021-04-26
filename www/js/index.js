let ua = null;
let connectedSession = null;
let currentCall = null;
let localStream = null;
let remoteStream = null;
let stateUI = null;
let yourId = null;

document.addEventListener('deviceready', onDeviceReady, false);

function setUIState(state) {
	switch (state) {
		case 'init':
			$('#init').show();
			$('#app').hide();
			break;
		case 'ready':
			$('#init').hide();
			$('#app').show();
			$('#callForm').show();
			$('#yourId').text(connectedSession.getId());
			$('#hangupButton').hide();
			$('#conference').hide();
			break;
		case 'call':
			$('#callForm').hide();
			$('#hangupButton').show();
			$('#conference').show();
			break;
		default:
			break;
	}
}

function onDeviceReady() {

	setUIState('init');

	let cordova = window.cordova;

	if (device !== undefined && device.platform === 'Android') {
		
		let permissions = cordova.plugins.permissions;

		function checkVideoPermissionCallback(status) {
			if (!status.hasPermission) {
				let errorCallback = () => {
					alert('Camera permission is not turned on');
				};
				permissions.requestPermission(
					permissions.CAMERA,
					(status) => {
						if (!status.hasPermission) {
							errorCallback();
						}
					},
					errorCallback
				);
			}
		}

		function checkAudioPermissionCallback(status) {
			if (!status.hasPermission) {
				let errorCallback = () => {
					alert('Audio permission is not turned on');
				};
				permissions.requestPermission(
					permissions.RECORD_AUDIO,
					(status) => {
						if (!status.hasPermission) {
							errorCallback();
						}
					},
					errorCallback
				);
			}
		}

		permissions.hasPermission(permissions.CAMERA, checkVideoPermissionCallback, null);
		permissions.hasPermission(permissions.RECORD_AUDIO, checkAudioPermissionCallback, null);
	}

	apiRTC.setLogLevel(10);

	ua = new apiRTC.UserAgent({
		uri: 'apzkey:myDemoApiKey',
	});

	let registerInformation = {
		cloudUrl: 'https://cloud.apizee.com',
	};


	ua.register(registerInformation)
		.then((session) => {
			console.log('User registered with session: ', session);
			session
				.on('contactListUpdate', (updatedContacts) => {
					console.log('contactListUpdate', updatedContacts);
				})
				.on('incomingCall', (invitation) => {
					invitation.accept().then((call) => {
						currentCall = call;
						setCallListeners();
						setUIState('call');
					});
				});
			connectedSession = session;
			setUIState('ready');
		})
		.catch(function (error) {
			console.error('User agent registration failed', error);
		});
}



function setCallListeners() {
	currentCall
		.on('localStreamAvailable', (stream) => {
			console.log('localStreamAvailable', stream);
			localStream = stream;
			stream.addInDiv('localStream', 'localMedia', {}, false);
		})
		.on('streamAdded', (stream) => {
			console.log('streamAdded :', stream);
			remoteStream = stream;
			stream.addInDiv('remoteStream', 'remoteMedia', {}, false);
		})
		.on('streamRemoved', (stream) => {
			stream.removeFromDiv('remoteStream', 'remoteMedia');
			remoteStream = null;
		})
		.on('userMediaError', (e) => {
			console.error('userMediaError detected : ', e);
			console.error('userMediaError detected with error : ', e.error);
		})
		.on('hangup', () => {
			clearStreams();
			currentCall = null;
			setUIState('ready');
		});
}

function clearStreams() {
	if (localStream) {
		localStream.removeFromDiv('localStream', 'localMedia');
	}
	if (remoteStream) {
		remoteStream.removeFromDiv('remoteStream', 'remoteMedia');
	}
	localStream = null;
	remoteStream = null;
}

$('#callForm').submit((e) => {
	e.preventDefault();

	let calleeId = $('#calleeId').val();

	if (calleeId === undefined || calleeId === null) {
		console.error('Calling user id is not defined');
		return;
	}

	let contact = connectedSession.getOrCreateContact(calleeId);
	let call = contact.call();
	if (!call) {
		console.error('Cannot establish the call');
		return;
	}
	currentCall = call;
	setCallListeners();
	setUIState('call');
});

$('#hangupButton').click((e) => {
	e.preventDefault();

	if (!currentCall) {
		console.error('Call is not defined');
		return;
	}

	currentCall.hangUp();
});
