const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'src/pages/DownloadPage.vue');
let s = fs.readFileSync(p, 'utf-8');

const jsInject = \
const activeFeatureIndex = ref(0)
const interactiveFeatures = [
  {
    title: '智能识别',
    desc: '拍照扫描，秒识别药品成分、用法、禁忌。AI 帮你理解复杂的医学信息。',
    shotId: 'medicine-recognition'
  },
  {
    title: '安全卫士',
    desc: '实时检测用药风险，药物相互作用一览无遗。为你的健康把关。',
    shotId: 'safety-assist'
  },
  {
    title: '贴心陪伴',
    desc: '个性化提醒，深浅主题切换，7 种风格选择。用来自你的设计语言。',
    shotId: 'my-profile'
  }
]

const activeFeatureImage = computed(() => {
  const shotId = interactiveFeatures[activeFeatureIndex.value].shotId;
  const shot = screenshotRegistry.get(shotId)
  return shot ? (shot.imageUrl || shot.thumbUrl) : ''
})

const buildInfo = computed\;

s = s.replace(/const buildInfo = computed/, jsInject);

const htmlInject = \        <div class="features-text">
          <h3>为什么选择 Luminous</h3>
          <ul class="features-list">
            <li
              v-for="(feat, idx) in interactiveFeatures"
              :key="idx"
              :class="{ 'is-active': activeFeatureIndex === idx }"
              @mouseenter="activeFeatureIndex = idx"
            >
              <strong>{{ feat.title }}</strong>
              <p>{{ feat.desc }}</p>
            </li>
          </ul>
        </div>

        <div class="features-visual features-visual-device">
          <div class="feature-mockup-wrapper">
             <transition name="fade" mode="out-in">
               <img :key="activeFeatureImage" :src="activeFeatureImage" alt="Feature Preview" class="feature-mockup-image" />
             </transition>
          </div>
        </div>\;

s = s.replace(/<div class="features-text">[\s\S]*?<\/div>[\s\S]*?<div class="features-visual features-visual-device">[\s\S]*?<\/div>/, htmlInject);

const cssInject = \
.features-list li {
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid rgba(100, 116, 139, 0.06);
  border-radius: 0.5rem;
  border-left: 3px solid rgba(200, 240, 216, 0.1);
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;
  transform: translateX(0);
}

.features-list li.is-active {
  opacity: 1;
  transform: translateX(10px);
  border-left-color: rgba(200, 240, 216, 1);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
}

.feature-mockup-wrapper {
  position: relative;
  width: 280px;
  height: 580px;
  border-radius: 36px;
  background: #f8fafc;
  border: 10px solid #ffffff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05);
  overflow: hidden;
}

.feature-mockup-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}\;

s = s.replace(/\.features-list li {[\s\S]*?border-left: 3px solid rgba\(200, 240, 216, 0\.3\);\n}/, cssInject);

fs.writeFileSync(p, s, 'utf-8');
console.log('Done refactoring');
