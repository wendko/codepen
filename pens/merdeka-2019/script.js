analyser.connect(distortion);
distortion.connect(audioCtx.destination);



// if (navigator.getUserMedia) {
//    navigator.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
//       function(stream) {
//          console.log("Accessed the Microphone");
//       },
//       function(err) {
//          console.log("The following error occured: " + err.name);
//       }
//     );
// } else {
//    console.log("getUserMedia not supported");
// }