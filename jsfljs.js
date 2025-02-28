
  function imgSwitch(id, color, cat) {
    console.log(`Entered imgSwitch(id = ${id}, color = ${color}, cat = ${cat})`);
    let div1 = id + "1";
    let div2 = id + "2";
    let strURL = "";
    let linkHSSB = document.getElementById("HSSB").style;
    let linkHSSG = document.getElementById("HSSG").style;
    let linkOTSGGRR = document.getElementById("OTSGGRR").style;
    let linkOTSMBRAR = document.getElementById("OTSMBRAR").style;
    let linkOTSOFS = document.getElementById("OTSOFS").style;

    let strBI = document.getElementById(div1).style.backgroundImage.slice(4, -1).replace(/["'"]/g, "");
    console.log(`strBI = ${strBI}`);
    let arrBI = strBI.split(".");
    printArray(arrBI);

    let arrModel = arrBI[1].split("_");
    printArray(arrModel);

    if (cat === "Null") {
      arrBI = trimArray(arrBI);
      arrBI[3] = color;
      arrBI[4] = "Null";
      strURL = concatArray(arrBI);
      console.log(`strURL = ${strURL}`);
    } else {
      arrCat = cat.split(".");
      arrBI = trimArray(arrBI);
      printArray(arrCat);
      if (arrCat.length > 2) {
        arrBI[4] = arrCat[1] + "." + arrCat[2];
      } else {
        arrBI[4] = arrCat[1];
      }
      //arrBI[4] = cat;
      printArray(arrBI);
      strURL = concatArray(arrBI);
    }

    console.log(arrModel.length);
    switch (arrModel.length) {
      case 4:
        arrModel[2] = arrModel[2] + "_" + arrModel[3];
        break;
      case 5:
        arrModel[2] = arrModel[2] + "_" + arrModel[3] + "_" + arrModel[4];
        break;
      default:
        break;
    }
    console.log(`arrModel[2] = ${arrModel[2]}`);

    switch (arrModel[2]) {
      case "EcoBoost":
        switch (arrBI[2]) {
          case "Fastback":
            switch (arrBI[3]) {
              case "Shadow_Black":
                document.getElementById("OTSFFRR").style.visibility = "visible";
                document.getElementById("OTSMBRAR").style.visibility = "visible";
                document.getElementById("OTSOFS").style.visibility = "hidden";
                document.getElementById("HSSB").style.visibility = "hidden";
                document.getElementById("HSSG").style.visibility = "visible";
                break;
              case "Race_Red":
              case "Molten_Magenta_Metallic_Tri-coat":
                linkOTSGGRR.visibility = "visible";
                linkOTSMBRAR.visibility = "hidden";
                linkOTSOFS.visibility = "visible";
                linkHSSB.visibility = "visible";
                linkHSSG.visibility = "hidden";
                break;
              default:
                linkOTSGGRR.visibility = "visible";
                linkOTSMBRAR.visibility = "visible";
                linkOTSOFS.visibility = "visible";
                linkHSSB.visibility = "visible";
                linkHSSG.visibility = "hidden";
            }
            break;
          case "Convertible":
            {
              switch (arrBI[3]) {
                case "Shadow_Black":
                  document.getElementById("HSSECB").style.visibility = "hidden";
                  document.getElementById("HSSECG").style.visibility = "visible";
                  break;
                default:
                  document.getElementById("HSSECB").style.visibility = "visible";
                  document.getElementById("HSSECG").style.visibility = "hidden";
                  break;
              }
            }
            break;
        }
        break;
      case "EcoBoost_Premium":
        switch (arrBI[2]) {
          case "Fastback":
            switch (arrBI[3]) {
              case "Shadow_Black":
                console.log(document.getElementById("EBPFHSSB"));
                document.getElementById("EBPFOTSGGRR").style.visibility = "visible";
                document.getElementById("EBPFOTSMBRAR").style.visibility = "visible";
                document.getElementById("EBPFOTSOFS").style.visibility = "hidden";
                document.getElementById("EBPFHSSB").style.visibility = "hidden";
                document.getElementById("EBPFHSSG").style.visibility = "visible";
                break;
              case "Molten_Magenta_Metallic_Tri-coat":
              case "Race_Red":
                document.getElementById("EBPFOTSGGRR").style.visibility = "visible";
                document.getElementById("EBPFOTSMBRAR").style.visibility = "hidden";
                document.getElementById("EBPFOTSOFS").style.visibility = "visible";
                document.getElementById("EBPFHSSB").style.visibility = "visible";
                document.getElementById("EBPFHSSG").style.visibility = "hidden";
                break;
              default:
                document.getElementById("EBPFOTSGGRR").style.visibility = "visible";
                document.getElementById("EBPFOTSMBRAR").style.visibility = "visible";
                document.getElementById("EBPFOTSOFS").style.visibility = "visible";
                document.getElementById("EBPFHSSB").style.visibility = "visible";
                document.getElementById("EBPFHSSG").style.visibility = "hidden";
                break;
            }
            break;
          case "Convertible":
            console.log(`Entered ${arrModel[2]}/${arrBI[2]}`);
            break;
        }
        break;
      case "GT":
      case "Dark":
      default:
        console.log("It fell through all the way");
    }

    document.getElementById(div1).style.backgroundImage = "url(" + strURL + ")";
    document.getElementById(div2).style.backgroundImage = "url(" + strURL + ")";
  }

  function trimArray(arr) {
    if (arr.length > 6) {
      arr.length = 5;
      arr[4] = "Null";
      arr[5] = "png";
    }
    return arr;
  }

  function concatArray(arr) {
    let strArr = "";
    for (let i = 0; i < arr.length; i++) {
      strArr = strArr + arr[i];
      if (i !== arr.length - 1) {
        strArr = strArr + ".";
      }
    }
    return strArr;
  }

  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`arrBI[${i}] = ${arr[i]}`);
    }
  }

  function postURL(pers, str) {
    let periodCount = 0;
    let position = -1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "/") {
        periodCount++;
        if (periodCount === pers) {
          position = i;
          break;
        }
      }
    }

    if (position !== -1) {
      return str.substring(position);
    } else {
      return "The string is not a URL";
    }
  }

  function initURL(pers, str) {
    let periodCount = 0;
    let position = -1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        periodCount++;
        if (periodCount === pers) {
          position = i;
          break;
        }
      }
    }

    if (position !== -1) {
      return str.substring(0, position + 1);
    } else {
      return "The string is not a URL";
    }
  }
