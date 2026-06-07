   const localizedRiddles = {
      en: [ { q: "What has to be broken before you can use it?", a: "egg" }, { q: "What has many keys but can't open a single lock?", a: "piano" } ],
      am: [ { q: "ጥቅም ላይ ከመዋሉ በፊት መሰበር ያለበት ምんどን ነው?", a: "እንቁላል" }, { q: "ብዙ ቁልፎች ያሉት ግን አንድም በር መክፈት የማይችል ምんどን ነው?", a: "ፒያኖ" } ],
      om: [ { q: "Otoo hojii irra hin bualin dura maal miidhamuu qaba?", a: "hanqaaquu" }, { q: "Furtuu baay'ee qaba garuu balbala tokko hin banu?", a: "piyaanoo" } ],
      fr: [ { q: "Qu'est-ce qui doit être cassé avant d'être utilisé?", a: "oeuf" }, { q: "Qu'est-ce qui a des touches mais ne peut ouvrir de serrures?", a: "piano" } ],
      es: [ { q: "¿Qué tiene que romperse antes de poder usarse?", a: "huevo" }, { q: "¿Qué tiene muchas teclas pero no abre cerraduras?", a: "piano" } ],
      tr: [ { q: "Kullanılmadan önce kırılması gereken şey nedir?", a: "yumurta" }, { q: "Birçok anahtarı olan ama hiç kilit açamayan şey nedir?", a: "piyano" } ],
      nl: [ { q: "Wat moet eerst gebroken worden voordat je het kunt gebruiken?", a: "ei" }, { q: "Wat heeft veel sleutels maar kan geen slot openen?", a: "piano" } ],
      zh: [ { q: "什么东西在使用前必须先被打破？", a: "鸡蛋" }, { q: "什么东西有很多键，却打不开一把锁？", a: "钢琴" } ]
    };

    const translations = {
      en: { label: "EN", navHome: "Home", navServices: "Services", aboutTitle: "About me", aboutBio: "I am a professional Web and App developer focused on creating modern, responsive, and high-performance solutions. With expertise in frontend and backend development, I build digital products that are fast, secure, and scalable.<br><br>Based in Addis Ababa, Ethiopia, I am dedicated to helping clients bring their visions to life through clean code and premium UI/UX design.", challengeTitle: "🎁10% Discount Challenge", challengeWarning: "Warning: 3 attempts total allowed per device. Incorrect choices will cause locking rules to initiate.", btnSubmitChallenge: "Submit & Claim", lockTitle: "🚫 DEVICE LOCKED", lockDesc: "This device is no longer eligible. Our security system has logged this attempt.", successTitle: "✅ CODE UNLOCKED!", successDesc: "Screenshot this and send it to me!", placeholder: "Type answer here...", attText: "Attempts remaining: " },
      am: { label: "AM", navHome: "ዋና ገጽ", navServices: "አገልግሎቶች", aboutTitle: "ስለ እኔ", aboutBio: "እኔ በዘመናዊ፣ ምላሽ ሰጭ (responsive) እና ከፍተኛ አፈጻጸም ባላቸው መፍትሄዎች ላይ ያተኮርኩኝ ፕሮፌሽናል የዌብ እና የአፕሊኬሽን አልሚ ነኝ። በfrontend እና backend ልማት ልምድ በመታገዝ ፈጣን፣ አስተማማኝ እና ሊሰፉ የሚችሉ ዲጂታል ምርቶችን እገነባለሁ።<br><br>መቀመጫዬ አዲስ አበባ፣ ኢትዮጵያ ሲሆን፣ ደንበኞች በንፁህ ኮድ እና በፕሪሚየም UI/UX ዲዛይን አማካኝነት ራዕያቸውን እንዲያሳኩ ለመርዳት እሰራለሁ።", challengeTitle: "🎁 የ10% ቅናሽ ፈተና", challengeWarning: "ማስጠንቀቂያ፡ በአንድ መሳሪያ መሞከር የሚፈቀደው 3 ጊዜ ብቻ ነው። የተሳሳተ ምርጫ መሣሪያዎን ይቆልፋል።", btnSubmitChallenge: "መልስ አስገባ", lockTitle: "🚫 መሣሪያው ተቆልፏል", lockDesc: "ይህ መሳሪያ ከዚህ በላይ መወዳደር አይችልም። የደህንነት ስርዓታችን ሙከራውን መዝግቦታል።", successTitle: "✅ ኮዱ ተከፍቷል!", successDesc: "ይህን ስክሪንሹት አድርገው ይላኩሉኝ!", placeholder: "መልስዎን እዚህ ይጻፉ...", attText: "ቀሪ ሙከራዎች: " },
      om: { label: "OM", navHome: "Mana", navServices: "Tajaajila", aboutTitle: "Waa'ee Koo", aboutBio: "Injinara software jabaa fi dandeettii saffisa ol'aanaa qabu. Furmaata nagaa qabu ijaaruun dandeettii addaa qaba.", challengeTitle: "🎁 Qormaata Kiloo 10% Discount", challengeWarning: "Yaalii sadii qofa siif hayyamama.", btnSubmitChallenge: "Galfata Ergi", lockTitle: "🚫 MEESHAA CUFAME", lockDesc: "Meeshaan keessan sirna nageenyaatiin cufameera.", successTitle: "✅ KODE BANAME!", successDesc: "Screenshot godhaa naaf ergaa!", placeholder: "Deebii asitti barreessi...", attText: "Yaalii hafe: " },
      fr: { label: "FR", navHome: "Accueil", navServices: "Services", aboutTitle: "À Propos", aboutBio: "Développeur d'applications haut de gamme axé sur la sécurité structurelle logicielle.", challengeTitle: "🎁 Défi de Réduction de 10%", challengeWarning: "Attention: 3 tentatives max par appareil sous peine de blocage.", btnSubmitChallenge: "Soumettre", lockTitle: "🚫 APPAREIL VERROUILLÉ", lockDesc: "Cet appareil a été banni suite à plusieurs échecs.", successTitle: "✅ CODE DÉVERROUILLÉ!", successDesc: "Faites une capture d'écran !", placeholder: "Tapez votre réponse...", attText: "Tentatives restantes : " },
      es: { label: "ES", navHome: "Inicio", navServices: "Servicios", aboutTitle: "Sobre Mí", aboutBio: "Ingeniero de software especializado en despliegues seguros y optimización funcional.", challengeTitle: "🎁 Desafío del 10% de Descuento", challengeWarning: "Atención: Máximo de 3 intentos permitidos para evitar bloqueos del sistema.", btnSubmitChallenge: "Validar Código", lockTitle: "🚫 DISPOSITIVO BLOQUEADO", lockDesc: "Este terminal ha sido restringido por violaciones de acceso.", successTitle: "✅ ¡CÓDIGO OBTENIDO!", successDesc: "¡Toma una captura ahora!", placeholder: "Escribe tu respuesta aquí...", attText: "Intentos restantes: " },
      tr: { label: "TR", navHome: "Anasayfa", navServices: "Hizmetler", aboutTitle: "Hakkımda", aboutBio: "Güvenli altyapılar ve yüksek hızlı web entegrasyonları kuran yazılım uzmanı.", challengeTitle: "🎁 %10 İndirim Yarışması", challengeWarning: "Dikkat: Cihaz başına en fazla 3 hatalı deneme hakkı bulunmaktadır.", btnSubmitChallenge: "Cevabı Gönder", lockTitle: "🚫 CİHAZ ENGELLENDİ", lockDesc: "Güvenlik loglarımız doğrultusunda bu cihazın erişimi kesilmiştir.", successTitle: "✅ KOD AÇILDI!", successDesc: "Ekran görüntüsü alıp bana iletin!", placeholder: "Cevabınızı buraya yazın...", attText: "Kalan hak: " },
      nl: { label: "NL", navHome: "Home", navServices: "Diensten", aboutTitle: "Over Mij", aboutBio: "Professionele webdeveloper gespecialiseerd in high-performance databeheer.", challengeTitle: "🎁 10% Korting Challenge", challengeWarning: "Pas op: Maximaal 3 pogingen toegestaan voordat het apparaat wordt geblokkeerd.", btnSubmitChallenge: "Verzenden", lockTitle: "🚫 APPARAAT GEBLOKKEERD", lockDesc: "Dit systeem is uitgesloten van verdere deelname.", successTitle: "✅ CODE VRIJGEGEVEN!", successDesc: "Maak een screenshot !", placeholder: "Vul hier je antwoord in...", attText: "Pogingen over: " },
      zh: { label: "ZH", navHome: "首页", navServices: "服务项目", aboutTitle: "关于我", aboutBio: "深耕全栈产品演进，精通系统级高容灾防御与数据全链路生命周期安全加固。", challengeTitle: "🎁 专属 10% 减免挑战赛", challengeWarning: "安全警告：全机仅限3次破译机会。超出阀值系统将自动触发硬重置物理锁定锁定机制。", btnSubmitChallenge: "验证并提取", lockTitle: "🚫 设备已被安全隔离", lockDesc: "由于高频碰撞测试失败，该终端节点已被云安全防线永久阻断。", successTitle: "✅ 特权凭证解锁成功！", successDesc: "请立即截图保存并回传商务代表进行核销！", placeholder: "在此处键入破译密匙...", attText: "剩余破译次数：" }
    };

    let activeLang = 'en';

    function toggleLangMenu(e) { e.stopPropagation(); const menu = document.getElementById('langMenuBox'); menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; }
    
    function changeLanguage(lang) {
        activeLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        document.getElementById('currentLangLabel').innerText = translations[lang].label;
        document.getElementById('langMenuBox').style.display = 'none';

        document.getElementById('navHome').innerText = translations[lang].navHome;
        document.getElementById('navServices').innerText = translations[lang].navServices;
        document.getElementById('aboutTitle').innerText = translations[lang].aboutTitle;
        document.getElementById('aboutBio').innerHTML = translations[lang].aboutBio;
        document.getElementById('challengeTitle').innerText = translations[lang].challengeTitle;
        document.getElementById('challengeWarning').innerText = translations[lang].challengeWarning;
        document.getElementById('btnSubmitChallenge').innerText = translations[lang].btnSubmitChallenge;
        document.getElementById('lockTitle').innerText = translations[lang].lockTitle;
        document.getElementById('lockDesc').innerText = translations[lang].lockDesc;
        document.getElementById('successTitle').innerText = translations[lang].successTitle;
        document.getElementById('successDesc').innerText = translations[lang].successDesc;
        document.getElementById('answerInput').placeholder = translations[lang].placeholder;

        updateAttemptsDisplay();
        displayRiddle();
    }

    function getRiddleIndex() {
        // Rotates riddle strictly every calendar day
        const timeBucket = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); 
        return timeBucket % localizedRiddles['en'].length;
    }

    function displayRiddle() {
        const idx = getRiddleIndex();
        document.getElementById('riddleText').innerText = localizedRiddles[activeLang][idx].q;
    }

    function getSecureState() {
        let attempts = localStorage.getItem('__sys_sec_att');
        if (attempts === null) {
            localStorage.setItem('__sys_sec_att', '3');
            return 3;
        }
        return parseInt(attempts, 10);
    }

    function updateAttemptsDisplay() {
        const left = getSecureState();
        document.getElementById('attemptsLeftText').innerText = translations[activeLang].attText + left;
    }

    function checkAnswer() {
        let left = getSecureState();
        if (left <= 0 || localStorage.getItem('user_ban_status') === 'banned') {
            triggerLockdown();
            return;
        }

        const userAns = document.getElementById('answerInput').value.toLowerCase().trim();
        const idx = getRiddleIndex();
        
        // Multi-language fault tolerance logic validation matrix
        const exactMatchFound = Object.keys(localizedRiddles).some(lang => {
             return userAns === localizedRiddles[lang][idx].a.toLowerCase();
        });

        if (exactMatchFound) {
            document.getElementById('quizActive').style.display = 'none';
            document.getElementById('quizSuccess').style.display = 'block';
        } else {
            left--;
            localStorage.setItem('__sys_sec_att', left.toString());
            updateAttemptsDisplay();
            if (left <= 0) {
                triggerLockdown();
            }
        }
    }

    function triggerLockdown() {
        localStorage.setItem('user_ban_status', 'banned');
        localStorage.setItem('__sys_sec_att', '0');
        document.getElementById('quizActive').style.display = 'none';
        document.getElementById('quizLocked').style.display = 'block';
    }

    document.addEventListener('click', () => { document.getElementById('langMenuBox').style.display = 'none'; });

    window.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('user_ban_status') === 'banned' || getSecureState() <= 0) {
            document.getElementById('quizActive').style.display = 'none';
            document.getElementById('quizLocked').style.display = 'block';
        }
        const savedLang = localStorage.getItem('selectedLanguage') || 'en';
        changeLanguage(savedLang);
    });

    const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.getElementById('canvas-container').appendChild(renderer.domElement);
    const geo = new THREE.BufferGeometry(); const pos = [];
    for (let i = 0; i < 2000; i++) pos.push(THREE.MathUtils.randFloatSpread(2000), THREE.MathUtils.randFloatSpread(2000), THREE.MathUtils.randFloatSpread(2000));
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const parts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x6366f1, size: 2.5 })); scene.add(parts); camera.position.z = 800;
    function animate() { requestAnimationFrame(animate); parts.rotation.y += 0.0006; renderer.render(scene, camera); } animate();
    const card = document.getElementById('avatarCard'); document.addEventListener('mousemove', (e) => { let x = (window.innerWidth / 2 - e.pageX) / 15; let y = (window.innerHeight / 2 - e.pageY) / 15; card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`; });
    window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });