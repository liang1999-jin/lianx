var Dianji=0;
		window.onload=function(){
		 var yes = document.getElementById("yes");
		 var no = document.getElementById("no");
		 no.onclick=function(){
		  Dianji++;
		    if(Dianji==1){
		       alert("小姐姐再考虑一下呗");
		    }else if(Dianji==2){
		       alert("你是我见过的最漂亮善良可爱的女孩子");
		       
		    }else if(Dianji==3){
		       alert("一生一世爱你");
		       
		    }else if(Dianji==4){
		       alert("家务我全干");
		       
		   }else if(Dianji==5){
		       alert("不藏私房钱");
		   }else if(Dianji==6){
		       alert("房子写你名");
		   }else if(Dianji==7){
		       alert("工资全上交");
		      Dianji=1;
		   }
		 }
		 yes.onclick=function(){
		  alert("你终于同意了，小姐姐我爱你");
		 }
		  
		}