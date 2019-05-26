function bold () {document.getElementById('text').style.fontWeight = 'bold'; 
}
function italic () {document.getElementById('text').style.fontStyle = 'italic'; 
}
function underlined () {document.getElementById('text').style.textDecoration = 'underline'; 
}

var S = document.getElementById('size').value;

function applysize() 
{
    var S = document.getElementById('size').value;
 document.getElementById('text').style.fontSize = S;
 }


 function applyfont() 
 {
     var F = document.getElementById('font').value;
  document.getElementById('text').style.fontFamily = F;
 }
