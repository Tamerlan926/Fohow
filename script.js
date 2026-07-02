// === БАЗА ДАННЫХ ПРОДУКТОВ ДЛЯ МОДАЛЬНОГО ОКНА ===
const productsData = {
    1: { title: "Slim Power", desc: "Инновационный комплекс для контроля веса и ускорения метаболизма.", usage: "Принимать по 1 капсуле 2 раза в день." },
    2: { title: "Active ProBio Probiotic Drink", desc: "Живой пробиотический напиток для восстановления микрофлоры.", usage: "Выпить 1 флакон утром натощак." },
    3: { title: "Fito-ChangQing Plant Drink", desc: "Натуральный растительный напиток для глубокого очищения организма.", usage: "Развести пакетик в 200 мл теплой воды." },
    4: { title: "Gut & Metabolism Balance System", desc: "Комплексная система для баланса метаболизма и здоровья кишечника.", usage: "Принимать согласно инструкции курсом." },
    5: { title: "Capsules 'Linchzhi'", desc: "Капсулы с экстрактом гриба Линчжи — мощного иммуномодулятора.", usage: "По 2 капсулы 2 раза в день." },
    6: { title: "Calcium Capsules 'Haicao Gai'", desc: "Легкоусвояемый кальций из морских источников.", usage: "По 1-2 капсулы 2 раза в день." },
    7: { title: "Nutritional Tablets 'Gaoqian'", desc: "Питательные таблетки для общего укрепления организма.", usage: "Рассасывать по 3-5 таблеток в день." },
    8: { title: "Prebiotic Paste 'Meigui'", desc: "Пребиотическая паста с розой для здоровья кишечника.", usage: "1 чайная ложка пасты в день." },
    9: { title: "Oral Liquid 'Phoenix'", desc: "Жидкий концентрат для женского здоровья.", usage: "По 1 флакону в день утром." },
    10: { title: "Oral Liquid 'Sanbao'", desc: "Жидкий концентрат 'Три сокровища' для регуляции систем организма.", usage: "По 1 флакону в день." },
    11: { title: "Oral Liquid 'Sanqing'", desc: "Жидкий концентрат для тройной очистки (печень, почки, кровь).", usage: "По 1 флакону в день утром натощак." },
    12: { title: "Oral Liquid 'Phoenix Legend'", desc: "Премиальный жидкий концентрат для женщин.", usage: "По 1 флакону в день." },
    13: { title: "Capsules 'Xueqinfu'", desc: "Капсулы для очистки и восстановления кровеносной системы.", usage: "По 1 капсуле 3 раза в день." },
    14: { title: "'Movement Plus' Peptide Capsules", desc: "Пептидные капсулы для здоровья суставов и связок.", usage: "По 1 капсуле 2 раза в день." },
    15: { title: "Garlic Essence Oil Capsule", desc: "Капсулы с чесночным маслом. Природный антибиотик.", usage: "По 1 капсуле в день во время еды." },
    16: { title: "Puer Tea 'Liuwei Cha'", desc: "Пуэр чай 'Шесть вкусов' для очищения организма.", usage: "Заваривать 1 пакетик кипятком." },
    17: { title: "Tea 'Shun Ci'", desc: "Чай 'Шунь Цы' для регуляции обмена веществ.", usage: "1 пакетик на стакан горячей воды." },
    18: { title: "Princess Pearls Capsules 'Gufei Bao'", desc: "Капсулы 'Персиковая принцесса' для женской красоты.", usage: "По 1 капсуле на ночь." },
    19: { title: "Princess Pearl Capsule 'Gufei Bao' - 1 sample", desc: "Пробник капсул 'Персиковая принцесса'.", usage: "1 капсула на ночь." },
    20: { title: "Aloe Vera Gel", desc: "Натуральный гель алоэ вера для увлажнения кожи.", usage: "Наносить тонким слоем на кожу." },
    21: { title: "Toothpaste with cordyceps", desc: "Зубная паста с экстрактом кордицепса.", usage: "Чистить зубы 2 раза в день." },
    22: { title: "Eye Cream with Cordyceps Extract", desc: "Крем для век с кордицепсом от морщин и отеков.", usage: "Наносить утром и вечером." },
    23: { title: "Eye Pads with Cordyceps Extract", desc: "Гидрогелевые патчи для век с кордицепсом.", usage: "Накладывать на 15-20 минут." },
    24: { title: "Regenerating 'Multi-Peptide Serum' complex set", desc: "Комплекс мульти-пептидной сыворотки для омоложения.", usage: "Наносить на лицо утром и вечером." },
    25: { title: "Polypeptides Lifting Complex - Skincare Set", desc: "Полипептидный лифтинг-комплекс для подтяжки кожи.", usage: "Использовать все средства комплекса по очереди." },
    26: { title: "Mineral Recovery Serum", desc: "Минеральная восстанавливающая сыворотка.", usage: "Наносить на лицо после умывания." },
    27: { title: "Massage Cream", desc: "Специальный крем для массажа.", usage: "Нанести на массируемую зону." },
    28: { title: "Ultrasound Gel", desc: "Прозрачный гель для ультразвуковых процедур.", usage: "Нанести обильно перед использованием аппарата." },
    29: { title: "Meridian Energy cream", desc: "Крем для энергии меридианов.", usage: "Втирать по ходу меридианов." },
    30: { title: "Herbal Massage Oil 200ml", desc: "Травяное массажное масло.", usage: "Подогреть в руках и использовать для массажа." },
    31: { title: "Massager Gloves", desc: "Перчатки для самомассажа.", usage: "Надеть на руку и массировать тело." },
    32: { title: "Recent achievements of Ancient Medicine", desc: "Книга о древних достижениях медицины.", usage: "Для чтения и изучения." },
    33: { title: "BIO ENERGY MASSAGER Questions and Answers", desc: "Брошюра с вопросами и ответами по BEM.", usage: "Изучить перед началом использования." },
    34: { title: "Energy Revitalising Device REM", desc: "Устройство для revitalizing энергии REM.", usage: "Использовать по методике в инструкции." },
    35: { title: "Thermo infrared Sauna Capsule TIM", desc: "Термо инфракрасная сауна-капсула TIM.", usage: "Сеансы по 30-45 минут." },
    36: { title: "Bioenergetic Meridian Massager BEM 3.0", desc: "Биоэнергетический меридианный массажер BEM 3.0.", usage: "Водить манипулятором по телу 15-30 минут." },
    37: { title: "BEM Massager Accesories", desc: "Набор аксессуаров для массажера BEM.", usage: "Использовать совместно с аппаратом BEM." },
    38: { title: "Ionic Face Massager", desc: "Ионный массажер для лица.", usage: "Использовать с гелем по массажным линиям." },
    39: { title: "FOHOW Photon Lifting Device", desc: "Фотонное устройство для лифтинга лица.", usage: "Прикладывать к лицу на 10-15 минут." },
    40: { title: "Faradization Thermal Neck Belt", desc: "Термический пояс для шеи.", usage: "Надеть на шею, включить прогрев." },
    41: { title: "Faradization Thermal knee belt", desc: "Термический пояс для коленей.", usage: "Надеть на колени во время отдыха." },
    42: { title: "Faradization Thermal Waist Belt", desc: "Термический пояс для поясницы.", usage: "Надеть на поясницу на 1-2 часа." },
    43: { title: "YANG SHENG H2 Hydrogen Water Bottle", desc: "Бутылка для водородной воды YANG SHENG H2.", usage: "Налить воду, нажать кнопку генерации." },
    44: { title: "Natural Latex Pillow", desc: "Подушка из натурального латекса.", usage: "Использовать для сна." },
    45: { title: "Functional Bedding Set", desc: "Функциональный комплект постельного белья.", usage: "Использовать как обычное белье." },
    46: { title: "Functional Duvet", desc: "Функциональное одеяло.", usage: "Использовать для сна." }
};

// === ФУНКЦИИ МОДАЛЬНОГО ОКНА ===
function openModal(id) {
    const product = productsData[id];
    if (!product) return;

    document.getElementById('modalTitle').innerText = product.title;
    document.getElementById('modalDesc').innerText = product.desc;
    document.getElementById('modalUsage').innerText = product.usage;
    
    const clickedCard = document.querySelector(`.product-card-large[onclick="openModal(${id})"]`);
    if(clickedCard) {
        const price = clickedCard.querySelector('.price').innerText;
        const imgSrc = clickedCard.querySelector('img').src;
        document.getElementById('modalPrice').innerText = price;
        document.getElementById('modalImg').src = imgSrc;
    }

    document.getElementById('productModal').style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
}

// === ФУНКЦИОНАЛ FAQ (ВОПРОС-ОТВЕТ) ===
// Этот код ищет все вопросы на странице и добавляет им возможность открываться
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            
            // Если хочешь, чтобы при открытии одного закрывались другие - раскомментируй эти 3 строки:
            /*
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            */
            
            item.classList.toggle('active');
        });
    });
});

// === МОБИЛЬНОЕ МЕНЮ ===
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

// === ФИЛЬТРАЦИЯ ПРОДУКТОВ ===
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card-large');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        productCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// === АНИМАЦИЯ ПРИ СКРОЛЛЕ ===
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card-large').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
});