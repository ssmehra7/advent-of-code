import axios from "axios"; 

async function fetchString() {
    try {
        const response = await axios.get("https://adventofcode.com/2023/day/1/input", {
            headers: {
                
                'Cookie': '_ga=GA1.2.2074414031.1732545056; _gid=GA1.2.1820295959.1732640014; session=53616c7465645f5fecea39bbe9db6085627ce93e49c3a00f9c0396e4138268f1b297a0a953b529e9741232b82ab09863d7c1d89b83a3d611f89203a6ca5a6e16; _ga_MHSNPJKWC7=GS1.2.1732640015.2.1.1732640302.0.0.0'
            },
           
        });

        
       return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function isDigit(char) {
    return char >= '0' && char <= '9'; // Check if the character is between '0' and '9'
}

async function main(){
    const responseString = await fetchString();
    const arr = responseString.split('\n'); 
    
    
    
    // let arr = ["1abc2", "pqr3stu8vwx","a1b2c3d4e5f","treb7uchet" ];
    let sum = 0 ; 

    for (let i = 0 ; i<arr.length; i++){
        let s = arr[i]; 
        if (s === ''){
            console.log("empty string"); 
            continue; 
        }
        let l = 0; let r = s.length-1; 

        while(l<=r){
            if (isDigit(s[l]) && isDigit(s[r])) {
                break;
            }else if(isDigit(s[l]) && !isDigit(s[r])){
                r--; 
            }else if(!isDigit(s[l]) && isDigit(s[r])){
                l++;
            }else {
                l++; 
                r--;
            }
            
        }
        let num = s[l]+s[r]; 

        sum+=num-'0'; 

    }


    console.log(sum); 

    

   
}


main(); 
