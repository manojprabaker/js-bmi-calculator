
let form=document.querySelector(".form-bmi");
let height=document.createElement("input");
height.type="text";
height.className="height";
form.appendChild(height);
height.placeholder="Enter Height in Metres";

//console.log(htval);


let weight=document.createElement("input");
weight.type="text";
weight.className="weight";
form.appendChild(weight);
weight.placeholder="Enter Weight in Kgs"
//console.log(wtval);



let sbtbtn=document.createElement("button");
form.appendChild(sbtbtn);
sbtbtn.className="submit"
sbtbtn.innerHTML="Compute BMI";


form.addEventListener("submit",function(e){

	
		e.preventDefault();
		let htval=parseFloat(height.value);
		let wtval=parseFloat(weight.value);
	let res=document.querySelector(".result");
	if((htval===" ") || (htval<0) || (isNaN(htval)))
	{
		res.innerHTML="Please Enter Valid Height";
		res.style.color="red";
		
	}
	else if((wtval==="") || (wtval<0) || (isNaN(wtval))  )
	{
		res.innerHTML="Please Enter Valid Weight";
		res.style.color="red";
	}
	else
	{
		findbmi();
	}
	
	function findbmi()
	{
		let resval = (wtval/(htval**2)) ;
		console.log(resval);
		if (resval<=19)
		{
			let result = document.querySelector(".result");
			result.innerHTML=`Your BMI is ${resval}-Under Weight`;
			result.style.color="yellow";
		}
		else if (resval>19 && resval<=25)
		{
			let result = document.querySelector(".result");
			result.innerHTML=`Your BMI is ${resval}-Normal`;
			result.style.color="green";
		}
		
		else
		{
			let result = document.querySelector(".result");
			result.innerHTML=`Your BMI is ${resval}-Over-Weight`;
			result.style.color="red";
		}
	}
	});