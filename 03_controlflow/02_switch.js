//Switch Case

//Syntax 
/*
switch(key){
    case value:
        break;
        default:
            break;
}*/

//e.g 1 
const month=2
switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;   //break is important nhi tho march ke baad ka sara code execute hoga except default ..default ko chod ke
    case 4:
        console.log("April") ;
        break;
    default:
        console.log("Out of List");
        break;   
}

//e.g 2
const month2="March";
switch(month2){
    case "Jan":
        console.log("Month is Jan");
        break;
    case "Feb":
        console.log("Month is Feb");
        break;
    case "March":
        console.log("Month is March");
        break;
    default:
        console.log("Month is not Listed");
        break;           
}