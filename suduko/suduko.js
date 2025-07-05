const options = document.querySelectorAll('.option');
        const submitBtn = document.getElementById('submitBtn');
        let level='';
        const board= document.getElementById('boardcontainer');
        const start=document.getElementById('start');
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Remove selected class from all options
                options.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                option.classList.add('selected');
                level = option.dataset.value;
                // Enable submit button
                submitBtn.classList.add('active');
            });
        });


        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.95) {
                createSparkle(e.clientX, e.clientY);
            }
        });

        function createSparkle(x, y) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.width = '4px';
            sparkle.style.height = '4px';
            sparkle.style.background = '#fff';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'sparkle 1s ease-out forwards';
            sparkle.style.zIndex = '1000';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
        
        // Add sparkle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkle {
                0% { transform: scale(0) rotate(0deg); opacity: 1; }
                50% { transform: scale(1) rotate(180deg); opacity: 1; }
                100% { transform: scale(0) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

submitBtn.addEventListener('click',()=>{
// Apply shrink animation
  start.style.animation = "start-deactivate 1s forwards";
  // After animation ends
  start.addEventListener("animationend", () => {
    start.style.display = "none"; // hide the start div

    // Show and animate board
    board.style.display = "block";
    board.style.animation = "growdiv 1s forwards"; // or just use CSS transitions
  }, { once: true }); // ensures it only triggers once
})
