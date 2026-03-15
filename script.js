document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Mobile Hamburger Menu Toggle
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // ==========================================
    // 2. Navbar Background Change on Scroll
    // ==========================================
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // 3. Scroll Reveal Animations (Intersection Observer)
    // ==========================================
    const revealElements = document.querySelectorAll('.fade-up');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // 4. Typing/Wiping Animation for Hero
    // ==========================================
    const typedTextSpan = document.querySelector('.typing-text');

    if (typedTextSpan) {
        const textArray = ["Web Developer", "Agent Developer", "Graphic Designer"];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 500);
            }
        }

        setTimeout(type, 1000);
    }

    // ==========================================
    // 5. Contact Form Submission (Google Apps Script)
    // ==========================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const btn = contactForm.querySelector('button');
            const originalBtnText = btn.innerHTML;

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            btn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin" style="margin-left: 10px;"></i>';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            // IMPORTANT: Replace this placeholder with the Web App URL provided by Google Apps Script
            const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

            try {
                // Formatting data as FormData so the GAS doPost() can easily parse it
                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('message', message);

                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: formData,
                    // Note: 'no-cors' mode is needed when writing to GAS without complex CORS headers
                    mode: 'no-cors'
                });

                // If no-cors is used, response.ok is always false, so we assume success if it didn't throw an error.
                btn.innerHTML = 'Sent Successfully! <i class="fa-solid fa-check" style="margin-left: 10px;"></i>';
                btn.style.backgroundColor = '#10b981'; // Greenish success
                btn.style.borderColor = '#10b981';
                btn.style.color = '#ffffff';

                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalBtnText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    btn.style.color = '';
                    btn.disabled = false;
                    btn.style.opacity = '1';
                }, 4000);

            } catch (error) {
                console.error('Error!', error.message);
                btn.innerHTML = 'Error Sending <i class="fa-solid fa-circle-exclamation" style="margin-left: 10px;"></i>';
                btn.style.backgroundColor = '#ef4444'; // Red error
                btn.style.borderColor = '#ef4444';

                setTimeout(() => {
                    btn.innerHTML = originalBtnText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    btn.style.color = '';
                    btn.disabled = false;
                    btn.style.opacity = '1';
                }, 4000);
            }
        });
    }

    // ==========================================
    // 6. Three.js 3D Starfield & Neural Network
    // ==========================================
    const canvas = document.getElementById('bg-canvas');
    if (canvas) {
        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x020617, 0.0012); // Cinematic depth fog

        // Camera setup
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 500;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization

        // ==========================================
        // Layer 1: 3D Starfield Galaxy
        // ==========================================
        const starCount = 4000;
        const starGeo = new THREE.BufferGeometry();
        const starPos = new Float32Array(starCount * 3);
        const starColors = new Float32Array(starCount * 3);

        const colorWhite = new THREE.Color(0xffffff);
        const colorBlue = new THREE.Color(0x06b6d4); // Secondary glow light blue

        for (let i = 0; i < starCount * 3; i += 3) {
            starPos[i] = (Math.random() - 0.5) * 2000;
            starPos[i + 1] = (Math.random() - 0.5) * 2000;
            starPos[i + 2] = (Math.random() - 0.5) * 2000;

            const isBlue = Math.random() > 0.8;
            starColors[i] = isBlue ? colorBlue.r : colorWhite.r;
            starColors[i + 1] = isBlue ? colorBlue.g : colorWhite.g;
            starColors[i + 2] = isBlue ? colorBlue.b : colorWhite.b;
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

        const starMaterial = new THREE.PointsMaterial({
            size: 2.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending
        });

        const starMesh = new THREE.Points(starGeo, starMaterial);
        scene.add(starMesh);

        // ==========================================
        // Layer 2: AI Neural Network
        // ==========================================
        const nodeCount = 130;
        const nodeGeo = new THREE.BufferGeometry();
        const nodePos = new Float32Array(nodeCount * 3);
        const nodeVels = [];

        for (let i = 0; i < nodeCount * 3; i += 3) {
            nodePos[i] = (Math.random() - 0.5) * 1200;
            nodePos[i + 1] = (Math.random() - 0.5) * 1200;
            nodePos[i + 2] = (Math.random() - 0.5) * 1000 + 200; // Closer to viewer

            nodeVels.push({
                x: (Math.random() - 0.5) * 0.8,
                y: (Math.random() - 0.5) * 0.8,
                z: (Math.random() - 0.5) * 0.8
            });
        }

        nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));

        // Create soft circle texture for nodes
        function createCircleTexture() {
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const context = canvas.getContext('2d');
            const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.3, 'rgba(59, 130, 246, 0.8)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, 64, 64);
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        }

        const nodeMat = new THREE.PointsMaterial({
            size: 8,
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending,
            map: createCircleTexture(), // Soft glowing spheres
            depthWrite: false
        });
        const nodeMesh = new THREE.Points(nodeGeo, nodeMat);
        scene.add(nodeMesh);

        const lineMat = new THREE.LineBasicMaterial({
            color: 0x06b6d4, // Cyan glowing lines
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const lineMesh = new THREE.LineSegments(new THREE.BufferGeometry(), lineMat);
        scene.add(lineMesh);

        // ==========================================
        // Mouse Interaction
        // ==========================================
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX) * 0.05;
            mouseY = (event.clientY - windowHalfY) * 0.05;
        });

        // ==========================================
        // Animation Loop
        // ==========================================
        const starSpeed = 2;
        const maxDistance = 150; // Distance to connect nodes

        function animate() {
            requestAnimationFrame(animate);

            // 1. Move stars
            const sPositions = starMesh.geometry.attributes.position.array;
            for (let i = 0; i < starCount * 3; i += 3) {
                sPositions[i + 2] += starSpeed;
                if (sPositions[i + 2] > 500) {
                    sPositions[i + 2] = -1500;
                    sPositions[i] = (Math.random() - 0.5) * 2000;
                    sPositions[i + 1] = (Math.random() - 0.5) * 2000;
                }
            }
            starMesh.geometry.attributes.position.needsUpdate = true;
            starMesh.rotation.z += 0.0002; // Slow galaxy rotation

            // 2. Move Neural Nodes
            const nPositions = nodeMesh.geometry.attributes.position.array;
            const linePositions = [];

            for (let i = 0; i < nodeCount; i++) {
                const idx = i * 3;
                const vel = nodeVels[i];

                nPositions[idx] += vel.x;
                nPositions[idx + 1] += vel.y;
                nPositions[idx + 2] += vel.z;

                // Bounce off invisible boundary
                if (nPositions[idx] > 600 || nPositions[idx] < -600) vel.x *= -1;
                if (nPositions[idx + 1] > 600 || nPositions[idx + 1] < -600) vel.y *= -1;
                if (nPositions[idx + 2] > 600 || nPositions[idx + 2] < -100) vel.z *= -1;

                // Check connections to other nodes
                for (let j = i + 1; j < nodeCount; j++) {
                    const jdx = j * 3;
                    const dx = nPositions[idx] - nPositions[jdx];
                    const dy = nPositions[idx + 1] - nPositions[jdx];
                    const dz = nPositions[idx + 2] - nPositions[jdx];
                    const distSq = dx * dx + dy * dy + dz * dz;

                    if (distSq < maxDistance * maxDistance) {
                        linePositions.push(
                            nPositions[idx], nPositions[idx + 1], nPositions[idx + 2],
                            nPositions[jdx], nPositions[jdx + 1], nPositions[jdx + 2]
                        );
                    }
                }
            }
            nodeMesh.geometry.attributes.position.needsUpdate = true;
            nodeMesh.rotation.z += 0.0001; // subtle rotation
            nodeMesh.rotation.y += 0.0001;

            // Update line connections
            lineMesh.geometry.dispose();
            lineMesh.geometry = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

            // Match line mesh rotation to node mesh
            lineMesh.rotation.z = nodeMesh.rotation.z;
            lineMesh.rotation.y = nodeMesh.rotation.y;

            // 3. Parallax
            targetX = mouseX * 0.05;
            targetY = mouseY * 0.05;
            camera.rotation.y += 0.05 * (targetX - camera.rotation.y);
            camera.rotation.x += 0.05 * (targetY - camera.rotation.x);

            renderer.render(scene, camera);
        }

        animate();

        // Handle Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
});
