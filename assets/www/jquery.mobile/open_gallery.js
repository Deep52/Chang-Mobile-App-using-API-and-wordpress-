		fname= window.appRootDirName = "DCIM/.thumbnails";
		var checkImage = "jquery.mobile/images/check.png";
		var pictureSource;   
		var destinationType; 
		

		function open_gallery(){
		//alert("1");
		document.addEventListener("deviceready", onDeviceReady, false);
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
		}
		function onDeviceReady() {
		//alert("onDeviceReady");
		//document.addEventListener("backbutton", backKeyDown, false);
		// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
		} 
		function backKeyDown() {
		//alert("Does not back on device");
		}
		function onPhotoDataSuccess(imageData) {
		var smallImage = document.getElementById('smallImage');
		smallImage.style.display = 'block';
		smallImage.src = "data:image/jpeg;base64," + imageData;
		}
		function onPhotoURISuccess(imageURI) {
		largeImage.src = imageURI;
		}
		function capturePhoto() {
		//alert("hh");
		alert(onPhotoDataSuccess);
		navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
		quality : 35, 
		destinationType : Camera.DestinationType.FILE_URI, 
		sourceType : Camera.PictureSourceType.CAMERA, 
		allowEdit : true,
		encodingType: Camera.EncodingType.JPEG,
		popoverOptions: CameraPopoverOptions,
		saveToPhotoAlbum: true });         
		}
		function capturePhotoEdit() {
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
		destinationType: destinationType.DATA_URL });
		}
		function getPhoto(source) {
		alert(source);
		navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
		destinationType: destinationType.FILE_URI,
		sourceType: source 
		});
		}
		function onFail(message) {
		//alert('Failed because: ' + message);
		}

		//==========================custome gallert============================//
		function gotFS(fileSystem) {
		//fileSystem.root.getFile(fname, {create: false, exclusive: false}, gotFileEntry, fail);
		//fileSystem.root.getFile("1380630267684.jpg", null, gotFileEntry, fail);
		fileSystem.root.getDirectory(fname, {create: true, exclusive: false}, getDirSuccess, fail);       
		}

		/*function gotFileEntry(fileEntry) {
		fileEntry.file(gotFile, fail);
		}

		function gotFile(file){
		url=readDataUrl(file);
		text=readAsText(file);
		printObject(url);
		printObject(text);
		}

		function readDataUrl(file) {
		var reader = new FileReader();
		reader.onloadend = function(evt) {
		console.log("Read as data URL");
		console.log(evt.target.result);
		};  
		document.getElementById("smallImage").style.display='block'; 
		document.getElementById("smallImage").src = reader.readAsDataURL(file);
		}*/
		function getDirSuccess(dirEntry) {
		//alert("getDirSuccess");
		var directoryReader = dirEntry.createReader();
		directoryReader.readEntries(readerSuccess,fail);
		}

		function readerSuccess(entries){
		//alert("readerSuccess");
		var data ='';
		for (i=0; i<entries.length; i++) {
		dname=entries[i].name;
		sname=dname.split(".");
		if(sname[1]=="jpg" || sname[1]=="png" ){
		data += '<li data-src="'+entries[i].fullPath+'" class="liparent" data-span="imspan_'+i+'"><a><img  id="largeImage'+i+'" src="'+entries[i].fullPath+'" alt="" style="width:100px; height:120px;"/></a><span id="imspan_'+i+'"><img  src="'+checkImage+'" alt=""  ></span></li>';
		}
		}

		$("ul.gallery").html(data);
		$('.liparent').click(function(){
		var id=$(this).data('span');
		$('#'+id).toggle();
		$(this).toggleClass('abc');
		});
        //window.location.href="#select";		
		}
		function readerSuccess1(entries){
		var data ='';
		for (i=0; i<entries.length; i++) {
		$("#images").html($("#images").html()+' <img id="largeImage'+i+'" src="'+entries[i].fullPath+'" alt="" /> <br />');
		}
		}


		function fail(evt) {
		console.log(evt.target.error.code);
		}

		/*function printObject(o)
		{
		var out ='';
		for(var p in o)
		{
		out += p+': ' +o[p] + '\n';
		}
		alert(out);
		}*/


