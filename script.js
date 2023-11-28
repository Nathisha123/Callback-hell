// const ele=document.getElementById("id1")
// ele.innerText ="ABC"
// document.body.append(ele)

//callback hell task
// setTimeout(() => {
//   console.log("5");
//   setTimeout(() => {
//     console.log("4");
//     setTimeout(() => {
//       console.log("3");
//       setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//           console.log("1");
//           setTimeout(()=>{console.log("Happy Independance Day");

// },1000)
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//Callback Hell Task:
setTimeout(() => {
  document.getElementById("id1").innerText="10"
  setTimeout(() => {
    document.getElementById("id1").innerText="9"
    setTimeout(() => {
      document.getElementById("id1").innerText="8"
      setTimeout(() => {
        document.getElementById("id1").innerText="7"
        setTimeout(() => {
          document.getElementById("id1").innerText="6"
          setTimeout(() => {
            document.getElementById("id1").innerText="5"
            setTimeout(() => {
              document.getElementById("id1").innerText="4"
              setTimeout(() => {
                document.getElementById("id1").innerText="3"
                setTimeout(() => {
                  document.getElementById("id1").innerText="2"
                  setTimeout(() => {
                    document.getElementById("id1").innerText="1"
                    setTimeout(() => {
                      document.getElementById("id1").innerText="Happy Independence Day!!!"
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
