			var btn = document.getElementById("btn")
			var user = document.getElementById("user")
			var pass = document.getElementById("pass")
			var ouser = user.value
			console.log(user)
			console.log(ouser)
//			console.log(1)
		btn.onclick = function(){
			console.log(user)
			console.log(pass)
			setCookie(user,pass,7)

		}
