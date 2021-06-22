
function showtime(){  
    var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes()+":"+today.getSeconds();
  var dateTime = date+' '+time;
  var clock ='<div id="date_time">'+
  'Ngày : '+ date+'<br>'+
    time+
  '</div>';

  document.getElementById("clock").innerHTML = clock
  
  setTimeout("showtime()",1000)
}
  window.onload=showtime


//Tạo function để bắt sự kiện khi nhất click
function search(){
  //Lấy dữ liệu từ text box
    var city = document.getElementById("name_city").value;
  //Khai báo các biến để
    var API_Key ="fd475a824363c8b07e4587df1e310f9a";
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;
    //In ra console 
    console.log("Click Search");
    console.log("City:="+city);
    //Thực hiện fetch
    fetch(url) 
    //response được trả về dùng để kiểm tra 
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.log('Có lỗi!!!'+ response.status); 
          alert('Có lỗi!!! Thành phố '+city+' không tồn tại. Mã lỗi: ' + response.status);  
          return ; 
        // in response trả về lên màn hình bằng các gọi json
        }
        response.json()
        .then(function(data) {  
            console.log(data);
            // Khai báo và gán các giá trị từ data trả về 
            var theCity= data.name;
            var theTemp=Math.round(data.main.temp-273.15);
            var theCountry=data.sys.country
            // var theMaxTemp=data.main.temp_max-272.15;
            // var theMinTemp=data.main.temp_min-272.15;
            //Hiện thị kết quả ra màn hình thông qua html

            var ketqua= '<div style="margin-left: 10%;">'+
            '<b>Thông tin thời tiết</b><br>'+
            '&#8226; Thành phố :<b> '+ theCity + '</b></br>'+ 
            '&#8226; Nhiệt độ  :<b> '+ theTemp + '&deg;C </b> </br>'+
            // '&#8226;Tầm nhìn xa: <b>'+ theVisibility+'km</b></br>'+
            '&#8226; Quốc gia :<b> ' + theCountry + '</b>'+
            // 'Nhiệt độ cao nhất:  '+ theMaxTemp + ' độ C<br>'+
            // 'Nhiệt độ thấp nhất: '+ theMinTemp + ' độ C<br>'+
            '</div>';
            document.getElementById("info").innerHTML=ketqua;
        });  
      }  
    )
    .catch(function(err) {  
      console.log('Fetch Error :-S', err);  
    })
    
   

    
  }
