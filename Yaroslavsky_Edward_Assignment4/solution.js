// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   formUsername = document.getElementById("formUsername").value;
   formCaption = document.getElementById("formCaption").value;
   formImg = document.getElementById("formImg").value;
   imgLocation = fileLocations[formImg];
   // Pass values to addNewPost()
   addNewPost(formUsername,formCaption,imgLocation);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   var div = document.createElement("div");
   div.className = "post";
   
   // Create a span for the user
   var span = document.createElement("span");
   span.append(username);
   
   // Create image element
   var img = document.createElement("img");
   img.src = imgLocation;
   img.alt = caption;
   
   // Create overlay element
   var overlay = document.createElement("div");
   overlay.className = "postOverlay";
   overlay.append(caption);
   
   // Add all child elements (order matters)
   div.appendChild(span);
   div.appendChild(img);
   div.appendChild(overlay);
   
   // Add event listeners to post
   div.addEventListener("mouseover",function(){
		overlay.style.opacity = 1;
	});
	
	div.addEventListener("mouseleave",function(){
		overlay.style.opacity = 0;
	});
   
   // Add post element to post list
   var section = document.getElementById("postList");
   section.appendChild(div);
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};