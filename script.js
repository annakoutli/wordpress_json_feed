function listPosts(data){
	// adding the firsts bits of elements I want them to show once, class hfeed is used for markup purposes
  	var output= "<h2>Blog Feed from <a href='http://www.internetatmajor.com'>internetatmajor.com</a></h2>";
  	output +='<ul data-role="listview" class="hfeed">';	
  	// adding a loop to add as many li as needed according to the json feed and the count number
  	$.each(data.posts, function(key, val) {
  		output += '<li>';
  		output += '<span class="avatar ' + val.author.slug + '"></span>'; //adding the class to style the avatar
  		output += '<span class="date">' + val.date + '</span><br />';
  		output += '<span class="author">By <a href="http://internetatmajor.com/blog/author/' + val.author.slug + '/">' + val.author.name + '</a></span>'; //creating a link to authors page not by default on feed
  		output += '<div class="cleaner"></div>';
  		output += '<h3><a href="' + val.url + '">' + val.title + '</a></h3>';
  		output += '<p>' + val.excerpt + '</p>';
  		output += '</li>';
  	});
  	output += '</ul>'; // closing the ul outside the loop once
  	$('#feed').html(output); //outputing the code to the html element
}