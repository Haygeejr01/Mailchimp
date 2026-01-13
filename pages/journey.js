document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".journey-block");
    const video = document.getElementById("journey-video");

    if (!video) return;

    
    const isMobile = () => window.innerWidth <= 768;

    
    
    
    const STAGE_2_START = 2.0;

    const updateVideo = () => {
        

        const buildBlock = blocks[0].getBoundingClientRect();
        const growBlock = blocks[1].getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const triggerPoint = viewportHeight / 2;

        
        if (buildBlock.top < triggerPoint && buildBlock.bottom > triggerPoint) {
            
            blocks[0].classList.add("active");
            blocks[1].classList.remove("active");
            
            if (video.currentTime > 1.9) {
                video.currentTime = 0;
            }
            if (video.paused) video.play();
        } else if (growBlock.top < triggerPoint && growBlock.bottom > triggerPoint) {
            
            blocks[0].classList.remove("active");
            blocks[1].classList.add("active");
            
            const progress = (triggerPoint - growBlock.top) / growBlock.height;
            const targetTime = STAGE_2_START + (progress * (video.duration - STAGE_2_START));
            
            if (!isNaN(targetTime)) {
                video.pause();
                video.currentTime = targetTime;
            }
        } else {
            blocks.forEach(b => b.classList.remove("active"));
        }
    };

    
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateVideo();
                ticking = false;
            });
            ticking = true;
        }
    });

    
    window.addEventListener("resize", updateVideo);

    video.addEventListener("loadedmetadata", updateVideo);
    
    
    updateVideo();
});

