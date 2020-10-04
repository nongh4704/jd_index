$(function(){
    const images = [
        {
            id: 1,
            url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1227067366,3970347478&fm=26&gp=0.jpg",
        },
        {
            id: 2,
            url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4265247854,2306346587&fm=26&gp=0.jpg",
        },
        {
            id: 3,
            url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1568616077,2660862168&fm=26&gp=0.jpg",
        },
        {
            id: 4,
            url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3087706850,3760808762&fm=26&gp=0.jpg",
        },
        {
            id: 5,
            url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=65967467,2082043455&fm=26&gp=0.jpg",
        },
        {
            id: 6,
            url: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1478751722,3676862956&fm=26&gp=0.jpg",
        },
        {
            id: 7,
            url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3758779850,1827900731&fm=26&gp=0.jpg",
        },
        {
            id: 8,
            url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3536954709,1844148521&fm=26&gp=0.jpg",
        },
        {
            id: 9,
            url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568549252,298362912&fm=26&gp=0.jpg",
        },
        {
            id: 10,
            url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4029192916,117690840&fm=26&gp=0.jpg",
        },
        {
            id: 11,
            url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3467696806,3249872799&fm=26&gp=0.jpg",
        },
        {
            id: 12,
            url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1960071420,1949084827&fm=26&gp=0.jpg",
        },
        {
            id: 13,
            url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2059096133,322211736&fm=26&gp=0.jpg",
        },
        {
            id: 14,
            url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3592594397,3695448752&fm=26&gp=0.jpg",
        }
    ];


    let box = $("#box");
    $.each(images, function(index, item){
        box.append(
            `
            <li class="imgbox">
                <img src="${item.url}"/>
            </li>
            `
        );
    });
    setTimeout(_ =>{//等图片加载完成
        waterFall();
    }, 1000);
});


function waterFall(){
    let imgs = $(".imgbox");//获取所有图片
    let box = $(".content");

    let imgWidth = imgs.outerWidth();//获取图片宽度
    let contentWidth = box.width();//获取内容模块宽度
    let cols = Math.floor(contentWidth/imgWidth);//获取展示列数
    //声明一个数组用来储存每一列高度
    let heightArray = new Array();

    $.each(imgs,function(index, item){
        let imgHeight = $(item).outerHeight();
        //如果小于列数，设置成每一列高度，如果大于列数，定位图片位置
        if(index<cols){
            heightArray[index] = imgHeight;
        }else {
            
            $(item).css({
                position: "absolute",
                left: minIndex(heightArray)* imgWidth,
                top: minHeight(heightArray)
            });
            heightArray[minIndex(heightArray)] = minHeight(heightArray) + imgHeight;
        }
    });
}

/**
 * 获取最小高度值
 * @param {高度数组} heightArray 
 */
function minHeight(heightArray){
    return Math.min(...heightArray);   
}

/**
 * 获取最小高度的索引
 * @param {高度数组} heightArray 
 * @param {最小值} min 
 */
function minIndex(heightArray){
    let min = Math.min(...heightArray);
    return $.inArray(min, heightArray);
}


//这种做法需要在所有图片加载完成之后才能操作