// Tunggu HTML kelar di-load
document.addEventListener("DOMContentLoaded", function() {
    
    // JS nyari KTP bernama "update-slider"
    const sliderTrack = document.getElementById('update-slider');
    
    // Alat deteksi buat lu ngecek (nanti muncul di Inspect Element)
    console.log("Status Slider:", sliderTrack ? "KETEMU AMAN!" : "ERROR: ID NGGAK KETEMU CUY!");

    if(sliderTrack) {
        let currentIndex = 0;
        const totalSlides = 4; // 3 asli + 1 kloning
        
        function moveSlide() {
            currentIndex++;
            sliderTrack.classList.remove('no-transition');
            sliderTrack.style.transform = `translateX(-${currentIndex * 25}%)`;
            
            if (currentIndex === totalSlides - 1) {
                setTimeout(() => {
                    sliderTrack.classList.add('no-transition');
                    currentIndex = 0;
                    sliderTrack.style.transform = `translateX(0%)`;
                }, 800); // 800ms sesuai CSS transition lu
            }
        }
        
        // Jalanin otomatis tiap 3.5 detik
        setInterval(moveSlide, 3500);
    }
});