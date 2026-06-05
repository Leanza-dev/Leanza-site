import sys

with open('src/scripts/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

target = '''                    const injectStage = () => {
                        const stage = theater.querySelector('.theater-stage');
                        if(projectId && ProjectInjectors[projectId]) {
                            stage.innerHTML = \
                                <div class="theater-header-controls interactive-target" style="position:absolute; top:20px; left:50%; transform:translateX(-50%); z-index:10; display:flex; gap:15px; pointer-events:all;">
                                    <button class="theater-toggle-btn active interactive-target" id="btn-preview">VER PREVIEW</button>
                                    <button class="theater-toggle-btn interactive-target" id="btn-xray">MODO RAIO-X</button>
                                </div>
                                <div class="theater-views-container" style="position:relative; width:100%; height:100%; padding-top:60px;">
                                    <div id="view-preview" style="position:absolute; inset:0; top:60px; z-index:2; transition: opacity 0.4s;"></div>
                                    <div id="view-xray" style="position:absolute; inset:0; top:60px; z-index:1; opacity:0; pointer-events:none; transition: opacity 0.4s; display:flex; align-items:center; justify-content:center; flex-direction:column;"></div>
                                </div>
                            \;

                            const viewPreview = stage.querySelector('#view-preview');
                            const viewXray = stage.querySelector('#view-xray');
                            
                            ProjectInjectors[projectId](viewPreview, viewXray);

                            const btnPreview = stage.querySelector('#btn-preview');
                            const btnXray = stage.querySelector('#btn-xray');

                            btnPreview.onclick = () => {
                                btnPreview.classList.add('active');
                                btnXray.classList.remove('active');
                                viewXray.style.opacity = '0';
                                viewXray.style.pointerEvents = 'none';
                                viewPreview.style.opacity = '1';
                                viewPreview.style.pointerEvents = 'all';
                            };

                            btnXray.onclick = () => {
                                btnXray.classList.add('active');
                                btnPreview.classList.remove('active');
                                viewPreview.style.opacity = '0';
                                viewPreview.style.pointerEvents = 'none';
                                viewXray.style.opacity = '1';
                                viewXray.style.pointerEvents = 'all';
                            };'''

replacement = '''                    const injectStage = () => {
                        const stage = theater.querySelector('.theater-stage');
                        if(projectId && ProjectInjectors[projectId]) {
                            stage.innerHTML = \
                                <div class="theater-header-controls interactive-target" style="position:absolute; top:20px; left:50%; transform:translateX(-50%); z-index:10; display:flex; gap:15px; pointer-events:all;">
                                    <button class="theater-toggle-btn active interactive-target" id="btn-preview">VIEW CODE</button>
                                    <button class="theater-toggle-btn interactive-target" id="btn-xray">VISÃO RAIO-X</button>
                                    <button class="theater-toggle-btn interactive-target" id="btn-diagram">DIAGRAMA</button>
                                </div>
                                <div class="theater-views-container" style="position:relative; width:100%; height:100%; padding-top:60px;">
                                    <div id="view-preview" style="position:absolute; inset:0; top:60px; z-index:3; transition: opacity 0.4s;"></div>
                                    <div id="view-xray" style="position:absolute; inset:0; top:60px; z-index:2; opacity:0; pointer-events:none; transition: opacity 0.4s; display:flex; align-items:center; justify-content:center; flex-direction:column;"></div>
                                    <div id="view-diagram" style="position:absolute; inset:0; top:60px; z-index:1; opacity:0; pointer-events:none; transition: opacity 0.4s; display:flex; align-items:center; justify-content:center; flex-direction:column;">
                                        <div class="glass-card" style="padding: 3rem; text-align: center; border: 1px solid var(--brand-purple);">
                                            <div class="stage-pulse mb-4" style="border-color: var(--brand-purple);"></div>
                                            <h3 class="font-black text-2xl text-white mb-2">TOPOLOGIA DE ARQUITETURA</h3>
                                            <p class="font-mono text-sm text-silver mb-4">Diagrama unificado em processamento...</p>
                                            <div class="tech-tag" style="color: var(--brand-purple);">STATUS: OPTIMIZED</div>
                                        </div>
                                    </div>
                                </div>
                            \;

                            const viewPreview = stage.querySelector('#view-preview');
                            const viewXray = stage.querySelector('#view-xray');
                            const viewDiagram = stage.querySelector('#view-diagram');
                            
                            ProjectInjectors[projectId](viewPreview, viewXray);

                            const btnPreview = stage.querySelector('#btn-preview');
                            const btnXray = stage.querySelector('#btn-xray');
                            const btnDiagram = stage.querySelector('#btn-diagram');

                            const resetViews = () => {
                                [btnPreview, btnXray, btnDiagram].forEach(b => b.classList.remove('active'));
                                [viewPreview, viewXray, viewDiagram].forEach(v => {
                                    v.style.opacity = '0';
                                    v.style.pointerEvents = 'none';
                                });
                            };

                            btnPreview.onclick = () => {
                                resetViews();
                                btnPreview.classList.add('active');
                                viewPreview.style.opacity = '1';
                                viewPreview.style.pointerEvents = 'all';
                            };

                            btnXray.onclick = () => {
                                resetViews();
                                btnXray.classList.add('active');
                                viewXray.style.opacity = '1';
                                viewXray.style.pointerEvents = 'all';
                            };
                            
                            btnDiagram.onclick = () => {
                                resetViews();
                                btnDiagram.classList.add('active');
                                viewDiagram.style.opacity = '1';
                                viewDiagram.style.pointerEvents = 'all';
                            };'''

if target in content:
    content = content.replace(target, replacement)
    with open('src/scripts/main.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Replaced successfully")
else:
    print("Target not found")
