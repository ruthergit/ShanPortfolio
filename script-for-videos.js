    const videoItem = document.getElementById("video-item");
    const video_Bg = document.getElementById("video-bg");
    const btn1 = document.querySelector(".rd-btn-1");
    const btn2 = document.querySelector(".rd-btn-2");
    const btn3 = document.querySelector(".rd-btn-3");
    const btn4 = document.querySelector(".rd-btn-4");

    btn2.style.opacity = '0.4';
    btn3.style.opacity = '0.4';
    btn4.style.opacity = '0.4';

    const btn1_function = () =>{
        btn1.style.opacity = '1';
        btn2.style.opacity = '0.4';
        btn3.style.opacity = '0.4';
        btn4.style.opacity = '0.4';
        video_Bg.src = "PortraitVideo/Video 1.mp4";
        video_Bg.load();
        videoItem.src = "PortraitVideo/Video 1.mp4";
        videoItem.load();
    };

    const btn2_function = () =>{
        btn2.style.opacity = '1';
        btn1.style.opacity = '0.4';
        btn3.style.opacity = '0.4';
        btn4.style.opacity = '0.4';
        video_Bg.src = "PortraitVideo/Video 2.mp4";
        video_Bg.load();
        videoItem.src = "PortraitVideo/Video 2.mp4";
        videoItem.load();
    };

    const btn3_function = () =>{
        btn3.style.opacity = '1';
        btn2.style.opacity = '0.4';
        btn1.style.opacity = '0.4';
        btn4.style.opacity = '0.4';
        video_Bg.src = "PortraitVideo/Video 3.mp4";
        video_Bg.load();
        videoItem.src = "PortraitVideo/Video 3.mp4";
        videoItem.load();
    };

    const btn4_function = () =>{
        btn4.style.opacity = '1';
        btn2.style.opacity = '0.4';
        btn3.style.opacity = '0.4';
        btn1.style.opacity = '0.4';
        video_Bg.src = "PortraitVideo/Video 4.mp4";
        video_Bg.load();
        videoItem.src = "PortraitVideo/Video 4.mp4";
        videoItem.load();
    };


    videoItem.addEventListener('ended', () => {
        if (btn2.style.opacity === '1') {
            btn3_function();
        } else if (btn3.style.opacity === '1') {
            btn4_function();
        } else if (btn4.style.opacity === '1') {
            btn1_function();
        } else {
            btn2_function();
        }
    });

    const nextbtn = document.querySelector(".next");

    nextbtn.onclick = () => {
        
        if (btn2.style.opacity === '1') {
            btn3_function();
        } else if (btn3.style.opacity === '1') {
            btn4_function();
        } else if (btn4.style.opacity === '1') {
            btn1_function();
        } else {
            btn2_function();
        }
    }
    const prevbtn = document.querySelector(".prev");

    prevbtn.onclick = () => {
        
        if (btn2.style.opacity === '1') {
            btn1_function();
        } else if (btn3.style.opacity === '1') {
            btn2_function();
        } else if (btn4.style.opacity === '1') {
            btn3_function();
        } else {
            btn4_function();
        }
    }