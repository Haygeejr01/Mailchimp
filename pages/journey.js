document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".journey-block");
    const video = document.getElementById("journey-video");

    if (!video) return;

    // Check if mobile
    const isMobile = () => window.innerWidth <= 768;

    // Stage timings for the Sawyer's Bakeshop video
    // 0s-1.5s: Build A Business (Social Cards)
    // 2s-End: Grow A Business (Automation + Website)
    const STAGE_2_START = 2.0;

    const updateVideo = () => {
        // Video plays on all screen sizes

        const buildBlock = blocks[0].getBoundingClientRect();
        const growBlock = blocks[1].getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const triggerPoint = viewportHeight / 2;

        // Determine if we are in the Build or Grow section
        if (buildBlock.top < triggerPoint && buildBlock.bottom > triggerPoint) {
            // Stage 1: Build A Business
            blocks[0].classList.add("active");
            blocks[1].classList.remove("active");
            
            if (video.currentTime > 1.9) {
                video.currentTime = 0;
            }
            if (video.paused) video.play();
        } else if (growBlock.top < triggerPoint && growBlock.bottom > triggerPoint) {
            // Stage 2: Grow A Business
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

    // Use requestAnimationFrame for smoother scroll sync
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

    // Also check on resize
    window.addEventListener("resize", updateVideo);

    video.addEventListener("loadedmetadata", updateVideo);
    
    // Initial check
    updateVideo();
});
