// --- 1. Custom Slide to Unlock Logic ---
const slider = document.getElementById('unlock-slider');
const introScreen = document.getElementById('intro-screen');
const disclaimerScreen = document.getElementById('disclaimer-screen');

slider.addEventListener('input', function() {
    const value = this.value;
    const fillPosition = `calc(${value}% + (${26 - value * 0.52}px))`;
    this.style.background = `linear-gradient(to right, #007bff ${fillPosition}, transparent 0)`;

    if (value >= 99) {
        setTimeout(() => {
            introScreen.classList.remove('active');
            disclaimerScreen.classList.add('active');
            this.value = 0; 
            this.style.background = 'transparent';
        }, 150);
    }
});

slider.addEventListener('change', function() {
    if (this.value < 99) {
        this.value = 0;
        this.style.background = 'transparent';
    }
});

// --- 2. Disclaimer Continue Logic ---
document.getElementById('btn-accept-disclaimer').addEventListener('click', function() {
    disclaimerScreen.classList.remove('active');
    document.getElementById('main-app').classList.add('active');
});

// --- 3. Theme Toggle ---
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('theme-icon');
    if(document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// --- 4. Switch Navigation Views ---
function switchView(viewId, navElement) {
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    navElement.classList.add('active');
}

// --- 5. Switch Tabs & Move Indicator ---
function switchClass(classId, tabElement) {
    document.querySelectorAll('.class-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(classId).classList.add('active');
    tabElement.classList.add('active');

    // Slide indicator smoothly
    const indicator = document.getElementById('tab-indicator');
    if (classId === 'llb') {
        indicator.style.transform = 'translateX(100%)';
    } else {
        indicator.style.transform = 'translateX(0)';
    }
}

// --- 6. Generate Semesters Dynamically ---
const ballbContainer = document.getElementById('ballb-semesters');
const llbContainer = document.getElementById('llb-semesters');

const pyqData = [
    {
        semester: 1,
        sessions: [
            {
                year: "2021-26",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1MYoI6ykyWZd5FDLXX9Ibjr3ry9ckaapf/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/1.21-26.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: Sociology", available: true },
                    { name: "English", available: true },
                    { name: "Legal Language", available: true },
                    { name: "Legal Method", available: true },
                    { name: "Law of Contract", available: true }
                ]
            },
            
            {
                year: "2022-27",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1xQ2R7PouSR8KOjDsjmQhsDQq0x5ATO3w/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/1.22-27.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: Sociology", available: true },
                    { name: "English", available: true },
                    { name: "Legal Language", available: true },
                    { name: "Legal Method", available: true },
                    { name: "Law of Contract", available: true }
                ]
            },
			
			{
                year: "2024-29",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1BWyRP06q5zFX_JrqtucU-c8nyogj8e69/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/1.24-29.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: History", available: true },
                    { name: "English", available: true },
                    { name: "Legal Language", available: true },
                    { name: "Legal Method", available: true },
                    { name: "Law of Contract", available: true }
                ]
            }
        ]
    },
    {
        semester: 2,
        sessions: [
            {
                year: "2020-25",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1_j59f4vrxsjxGTaCOeb7NGdnDQ7QHzhe/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/2.20-25.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: History", available: true },
                    { name: "Special Contracts", available: true },
                    { name: "Banking & Insurance", available: true },
                    { name: "Jurisprudence", available: true },
                    { name: "Law of Torts", available: true }
                ]
            },
            {
                year: "2021-26",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1ARzapY8TS2gScKEwMhPbl4OpasotyKu1/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/2.21-26.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Special Contracts", available: true },
                    { name: "Banking & Insurance", available: true },
                    { name: "Jurisprudence", available: true },
                    { name: "Law of Torts", available: true }
                ]
            },
            {
                year: "2022-27",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1QemSjT2KLrPMywCInoJH57Qbo8m89Zz5/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/2.22-27.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: Sociology", available: true },
                    { name: "Special Contracts", available: true },
                    { name: "Banking & Insurance", available: true },
                    { name: "Jurisprudence", available: true },
                    { name: "Law of Torts", available: true }
                ]
            }
        ]
    },
    {
        semester: 3,
        sessions: [
            {
                year: "2021-26",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1M1EZtcfvkALu6Dv6XWA4m_qN16NwiNMV/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/3.21-26.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: English", available: true },
                    { name: "Public International Law", available: true },
                    { name: "Environmental Law", available: true },
                    { name: "Family Law", available: true },
                    { name: "Constitutional Law", available: true }
                ]
            },
            {
                year: "2022-27",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1DLDj-mKaXlGWo2VaUkzADnYkILkvF2ye/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/3.22-27.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: Political Science+Sociology", available: true },
                    { name: "Public International Law", available: true },
                    { name: "Environmental Law", available: true },
                    { name: "Family Law", available: true },
                    { name: "Constitutional Law", available: true }
                ]
            }
        ]
    },
    {
        semester: 4,
        sessions: [
            {
                year: "2021-26",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1YtAMjgLA5nEGD41ZJoxBSMfM5DzhdKuN/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/4.21-26.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: English", available: true },
                    { name: "Property Law", available: true },
                    { name: "Administrative Law", available: true },
                    { name: "Family Law", available: true },
                    { name: "Constitutional Law", available: true }
                ]
            },
            {
                year: "2022-27",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1o3qvB4h-6Xqr8elrcccgqO0O6-ZpZI3w/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/4.22-27.pdf",
                subjects: [
                    { name: "Minor: Political Science", available: true },
                    { name: "Major: Sociology", available: true },
                    { name: "Property Law", available: true },
                    { name: "Administrative Law", available: true },
                    { name: "Family Law", available: true },
                    { name: "Constitutional Law", available: true }
                ]
            }
        ]
    },
    {
        semester: 5,
        sessions: [
            {
                year: "2019-24",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/16Xz4xxCaRX89vJrfiSPy8kbd8kCCoEM0/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/5.19-24.pdf",
                subjects: [
                    { name: "Major: History", available: true },
                    { name: "Land Law", available: true },
                    { name: "IPC", available: true },
                    { name: "CrPC", available: true },
                    { name: "Alternate Dispute Resolution", available: true },
                    { name: "Interpretation of Statutes", available: true }
                ]
            },
            {
                year: "2020-25",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1LFqaOVpPTyetTTtNKQ2f9hMSt5Byw22a/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/5.20-25.pdf",
                subjects: [
                    { name: "Major: Sociology", available: true },
                    { name: "Land Law", available: true },
                    { name: "IPC", available: true },
                    { name: "CrPC", available: true },
                    { name: "Alternate Dispute Resolution", available: true },
                    { name: "Interpretation of Statutes", available: true }
                ]
            },
            {
                year: "2021-26",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1DPPMWOTxganGceq9U02n_CoBBt5vLAWQ/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/5.21-26.pdf",
                subjects: [
                    { name: "Land Law", available: true },
                    { name: "IPC", available: true },
                    { name: "CrPC", available: true },
                    { name: "Alternate Dispute Resolution", available: true },
                    { name: "Interpretation of Statutes", available: true }
                ]
            },
            {
                year: "2022-27",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/12TxzD6y1-DhzV2R3i72RQ5WuiRl5xr_M/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/5.22-27.pdf",
                subjects: [
                    { name: "Major: Sociology", available: true },
                    { name: "Land Law", available: true },
                    { name: "IPC", available: true },
                    { name: "CrPC", available: true },
                    { name: "Alternate Dispute Resolution", available: true },
                    { name: "International Humanitarian Law", available: true }
                ]
            }
        ]
    },
    {
        semester: 6,
        sessions: [
            {
                year: "2019-24",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1a1F06YZMOY7xXclVSvEbRgWwWHzDJ8l0/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/6.19-24.pdf",
                subjects: [
                    { name: "Major: History", available: true },
                    { name: "CrPC", available: true },
                    { name: "Women & Law", available: true },
                    { name: "IPC", available: true },
                    { name: "Professional Ethics", available: true }
                ]
            },
            {
                year: "2020-25",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1ha_z_DZoD7NV-yPwQajMznK9D34HR_NP/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/6.20-25.pdf",
                subjects: [
                    { name: "Major: Sociology", available: true },
                    { name: "CrPC", available: true },
                    { name: "Women & Law", available: true },
                    { name: "IPC", available: true },
                    { name: "Professional Ethics", available: true }
                ]
            },
            {
                year: "2021-26",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1Sjc8wt7k7ayNhOfLgy8YJu863VvE-plz/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/6.21-26.pdf",
                subjects: [
                    { name: "CrPC", available: true },
                    { name: "Women & Law", available: true },
                    { name: "IPC", available: true },
                    { name: "Professional Ethics", available: true }
                ]
            },
            {
                year: "2022-27",
                isLinkAvailable: true,
                viewLink: "https://drive.google.com/file/d/1fJUMCW6KTuUzw6gN1XbNZ6pmgVuo8F35/view?usp=drive_link",
                downloadLink: "https://raw.githubusercontent.com/ShekharLaw/ULC-LexDrive/main/Pdfs/6.22-27.pdf",
                subjects: [
                    { name: "Major: Sociology", available: true },
                    { name: "CrPC", available: true },
                    { name: "Women & Law", available: true },
                    { name: "IPC", available: true },
                    { name: "Professional Ethics", available: true }
                ]
            }
        ]
    },
    {
        semester: 7,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false,
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    },
    {
        semester: 8,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false,
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    },
    {
        semester: 9,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false,
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    },
    {
        semester: 10,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false,
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    }
];

const llbData = [
    {
        semester: 1,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false, 
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    },
    {
        semester: 2,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false, 
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    },
    {
        semester: 3,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false, 
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    },
    {
        semester: 4,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false, 
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    },
    {
        semester: 5,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false, 
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    },
    {
        semester: 6,
        sessions: [
            {
                year: "No Data",
                isLinkAvailable: false, 
                viewLink: "#",
                downloadLink: "#",
                subjects: [
                    { name: "No data available", available: false }
                ]
            }
        ]
    }
];

function generateSemesterHTML(data, startDelay = 0.25) {
    let htmlContent = "";
    let currentDelay = startDelay;
    
    data.forEach(sem => {
        let sessionHTML = "";
        sem.sessions.forEach(sess => {
            let subjectsHTML = "";
            sess.subjects.forEach(sub => {
                let badgeClass = sub.available ? "available" : "unavailable";
                subjectsHTML += `<span class="subj-badge ${badgeClass}">${sub.name}</span>`;
            });
            
            let actionBtnsHTML = sess.isLinkAvailable ? `
                <div class="action-btns">
                    <a href="${sess.viewLink}" target="_blank" class="btn-view"><i class="fas fa-eye"></i> View</a>
                    <a href="${sess.downloadLink}" target="_blank" class="btn-download"><i class="fas fa-download"></i> PDF</a>
                </div>
            ` : `<span style="color: #dc3545; font-size: 0.9rem; font-weight: 600;">PDF Not Available</span>`;

            sessionHTML += `
                <div class="session-item">
                    <div class="session-header">
                        <h4>Session ${sess.year}</h4>
                        ${actionBtnsHTML}
                    </div>
                    <div class="subject-list">${subjectsHTML}</div>
                </div>
            `;
        });
        htmlContent += `
            <details class="anim-item" style="--delay: ${currentDelay}s">
                <summary>
                    <div class="sem-title-area">Semester ${sem.semester}</div>
                    <!-- CHANGED TO semester-img.png -->
                    <img src="images/semester-img.png" alt="Semester Graphic" class="sem-illustration">
                </summary>
                ${sessionHTML}
            </details>
        `;
        currentDelay += 0.1; 
    });
    return htmlContent;
}

ballbContainer.innerHTML = generateSemesterHTML(pyqData);
llbContainer.innerHTML = generateSemesterHTML(llbData);


// --- 7. MODAL LOGIC ---
const fullScreenModal = document.getElementById('full-screen-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

function openFullScreenModal(title, content) {
    modalTitle.innerText = title;
    modalContent.innerHTML = content;
    fullScreenModal.classList.add('open');
    history.pushState({ modalOpen: true }, null, "");
}

function closeFullScreenModal() {
    history.back();
}

window.addEventListener('popstate', function(event) {
    if (fullScreenModal.classList.contains('open')) {
        fullScreenModal.classList.remove('open');
    }
});


// --- 8. Info Content Strings ---

const contentAbout = `
    <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
        <div>
            <!-- ADDED CENTERED IMAGE WITH SCALING LIMITS -->
            <div class="anim-item" style="--delay: 0.05s; text-align: center; margin-bottom: 20px;">
                <img src="images/about-logo.png" alt="About Image" style="width: 100%; max-width: 400px; height: auto; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            </div>
            
            <p class="anim-item" style="--delay: 0.1s;">ULC LexDrive is a student-created platform designed to consolidate college previous year question paper PDFs in one place.</p>
            <p class="anim-item" style="--delay: 0.2s; margin-top: 15px;">Many students find it difficult to locate old question papers because they are scattered across WhatsApp groups, different folders and personal devices. ULC LexDrive aims to make access easier by organising these PDFs in a simple and convenient manner.</p>
            <p class="anim-item" style="--delay: 0.3s; margin-top: 15px;">The purpose of this platform is only to:</p>
            <ul class="anim-item" style="--delay: 0.4s; margin-left: 20px; line-height: 1.6; margin-top: 5px;">
                <li>Collect available college PYQ PDFs</li>
                <li>Organise them subject-wise and semester-wise</li>
                <li>Provide quick and easy access for students</li>
            </ul>
            <p class="anim-item" style="--delay: 0.5s; margin-top: 15px;">It is only a repository of available college question paper PDFs intended to help students find them more easily. This platform has been independently developed by a student as a convenience initiative for fellow students.</p>
            <p class="anim-item" style="--delay: 0.6s; margin-top: 20px; font-weight: bold; text-align: center; color: var(--primary-color);">Dedicated to law students</p>
        </div>
        <div class="anim-item" style="--delay: 0.7s; text-align: center; font-weight: bold; margin-top: 40px; color: #888;">
            Version 1.0.0
        </div>
    </div>
`;

const contentIdea = `
    <!-- NOTE REMOVED FROM HERE -->
    <p class="anim-item" style="--delay: 0.1s;"><strong>The Problem-</strong> ULC LexDrive came from a common problem faced by many students during examinations. Previous year question paper play an important role in study and revision, but students often struggle to find them.</p>
    <p class="anim-item" style="--delay: 0.2s; margin-top: 15px;"><strong>The Solution-</strong> ULC LexDrive was created to solve this problem. The aim is simple to keep all available college PYQ PDFs together in one place and arrange them in a proper subject-wise and semester-wise order so that students can find the required paper quickly and easily.</p>
`;

const contentTutorial = `
    <p class="anim-item" style="--delay: 0.1s;">Here is how to use the app:</p>
    <ol style="margin-left: 20px; line-height: 1.8; margin-top:10px;">
        <li class="anim-item" style="--delay: 0.2s;">
            <strong>Select your class</strong> (BA LL.B or LL.B) from the top tabs.
            <br>
            <img src="images/tut1.jpg" alt="Step 1" style="width: 100%; border-radius: 8px; margin: 10px 0; border: 1px solid var(--border-color);">
        </li>
        <li class="anim-item" style="--delay: 0.3s;">
            <strong>Open a Semester</strong> to see available sessions.
            <br>
            <img src="images/tut2.jpg" alt="Step 2" style="width: 100%; border-radius: 8px; margin: 10px 0; border: 1px solid var(--border-color);">
        </li>
        <li class="anim-item" style="--delay: 0.4s;">
            Click <strong>View</strong> to read online or <strong>PDF</strong> to download.
            <br>
            <img src="images/tut3.jpg" alt="Step 3" style="width: 100%; border-radius: 8px; margin: 10px 0; border: 1px solid var(--border-color);">
        </li>
        <li class="anim-item" style="--delay: 0.5s;">
            Green subjects are available, Red are unavailable.
            <br>
            <img src="images/tut4.jpg" alt="Step 4" style="width: 100%; border-radius: 8px; margin: 10px 0; border: 1px solid var(--border-color);">
        </li>
    </ol>
`;

const contentFAQ = `
    <details class="faq-details anim-item" style="--delay: 0.1s;">
        <summary>1. Why is a particular PDF not available?</summary>
        <p>ULC LexDrive only consolidates available college PYQ PDFs. If students share missing PDFs with us, we will try to add them to the collection.</p>
    </details>
    <details class="faq-details anim-item" style="--delay: 0.15s;">
        <summary>2. Why is the PDF not downloading?</summary>
        <p>Downloads may temporarily fail when many students try to download the same file at the same time, especially near examinations. Please try again later and save important PDFs to your device in advance instead of waiting until the last day.</p>
    </details>
    <details class="faq-details anim-item" style="--delay: 0.2s;">
        <summary>3. What is the time limit for adding PYQs?</summary>
        <p>New PDFs are usually added within 4-6 days after we receive them. However, during college examination periods the process may take longer and can sometimes extend to a few weeks. Since all members are students, they remain occupied with their own studies and examinatons during that time.</p>
    </details>
    <details class="faq-details anim-item" style="--delay: 0.25s;">
        <summary>4. Why are internal exam PYQs not available?</summary>
        <p>We regret that internal exam PYQs are not currently available on this platform. Students should study their subjects regularly rather than depending entirely on PYQs.</p>
    </details>
    <details class="faq-details anim-item" style="--delay: 0.3s;">
        <summary>5. Can I contribute a missing PYQ PDF?</summary>
        <p>Yes. If you have a PYQ that is not available on the website, you can share it with us and we will review and add it if appropriate.</p>
    </details>
    <details class="faq-details anim-item" style="--delay: 0.35s;">
        <summary>6. Why am I seeing a 404 error?</summary>
        <p>The link might be broken or the file has been removed. Please use the feedback button to report it to us.</p>
    </details>
    <details class="faq-details anim-item" style="--delay: 0.4s;">
        <summary>7. What is the cost of using ULC LexDrive?</summary>
        <p>ULC LexDrive is completely free. We do not ask for money at any time or in any form. This project is created solely to help students.</p>
    </details>
`;

const contentTeam = `
    <div class="anim-item" style="--delay: 0.1s; text-align: center; margin-bottom: 20px;">
        <h3>Creator Name</h3>
        <p>Student Developer</p>
        <div style="display: flex; justify-content: center; gap: 15px; margin-top: 10px;">
            <a href="https://www.linkedin.com/in/shekhar-raj-b7a688415" target="_blank" style="color: #0077b5; font-size: 1.8rem;"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>
    
    <div class="team-box anim-item" style="--delay: 0.2s;">
        <p style="text-align: center; margin-bottom: 15px; font-weight: 600;">ULC LexDrive is a student-driven initiative. We welcome students who want to help fellow students by improving the availability of college PYQ PDFs.</p>
        
        <h4 style="text-align: center; margin-bottom: 15px; color: var(--primary-color);">Join Our Team</h4>
        <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 10px;">
            <a href="mailto:shekharraj.contact+P1ULC-LexDrive@gmail.com?subject=Joining%20ULC%20LexDrive%20Team&body=Name:%0ASemester:%0A" class="social-btn email-btn"><i class="fas fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/shekhar-raj-b7a688415" target="_blank" class="social-btn linkedin-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
        </div>
        <p style="text-align: center; font-size: 0.85rem; margin-bottom: 20px; color: var(--text-color);">Email with proper subject and DM on LinkedIn</p>
        
        <div class="team-bar">
            <strong>Who can join? (Requirements):</strong>
            <ul>
                <li>Be a currently enrolled student of the college</li>
                <li>Be willing to help other students voluntarily</li>
                <li>Be interested in maintaining and improving the PYQ collection</li>
            </ul>
        </div>
        
        <div class="team-bar">
            <strong>Your Work:</strong>
            <ul>
                <li>Keep track of college examination schedules and important exam dates</li>
                <li>Collect available PYQ PDFs from students and other source</li>
                <li>Help enrich and update the PYQ collection regularly</li>
                <li>Encourage students to share PYQs that are not yet available on the platform</li>
                <li>Inform new and unknown students about ULC LexDrive</li>
                <li>Share the app with classmates, juniors, and other students who may benefit from it</li>
                <li>Help maintain an organised and useful PYQ repository for everyone</li>
            </ul>
        </div>
    </div>

    <div class="team-box anim-item" style="--delay: 0.3s;">
        <h4 style="text-align: center; margin-bottom: 15px;">Meet Our Team</h4>
        <div class="team-bar" style="text-align: center; font-size: 1.05rem; line-height: 2;">
            <strong>ABC</strong><br>
            <strong>PQRS</strong><br>
            <strong>XYZ</strong><br>
            <strong>QWERTY</strong>
        </div>
    </div>
`;

const contentFeedback = `
    <div class="upload-header anim-item" style="--delay: 0.1s;">
        <h2 style="margin-bottom: 10px;">Feedback & Support</h2>
        <p style="margin-bottom: 15px;">Your feedback helps us improve ULC LexDrive for all students. If you find any issue or have any suggestion, please let us know.</p>
        
        <div style="text-align: left; background: var(--bg-color); padding: 15px; border-radius: 8px; border: 1px solid var(--border-color);">
            <strong>We encourage students to:</strong>
            <ul style="margin-left: 20px; margin-top: 10px; font-size: 0.95rem; line-height: 1.6;">
                <li><strong>Rate and share</strong> their experience.</li>
                <li><strong>Report a wrong PDF</strong> if the uploaded file is incorrect, damaged, duplicated, or belongs to another subject or semester.</li>
                <li><strong>Request a missing PDF</strong> that is not available in the collection.</li>
                <li><strong>Report broken download links</strong> or files that are not opening properly.</li>
                <li><strong>Suggest improvements</strong> for better organisation.</li>
                <li><strong>Share newly available PYQs</strong> so that other students can also benefit.</li>
                <li><strong>Send any other feedback or suggestions</strong> related to the platform.</li>
            </ul>
        </div>
        
        <p style="margin-top: 15px; font-size: 0.9rem;">Every feedback is valuable to us. Since ULC LexDrive is a student-driven initiative, your support and suggestions help us keep the PYQ collection more accurate, organised, and useful for everyone.</p>
    </div>
    
    <div class="upload-action anim-item" style="--delay: 0.2s; margin-bottom: 20px;">
        <a href="https://forms.gle/yCUPTHtnbG4zJQMJ7" target="_blank" class="upload-btn feedback-btn-glow" style="background: var(--primary-color);">
            <i class="fas fa-comment-dots"></i> Open Feedback Form
        </a>
    </div>
`;

const contentDisclaimer = `
    <p class="anim-item" style="--delay: 0.1s;">Please be informed that <strong>ULC LexDrive</strong> is <strong>not affiliated with, endorsed by, or officially associated with ULC VBU</strong>. This platform has been independently developed by a student of ULC for educational purposes.</p>
    <p class="anim-item" style="--delay: 0.2s; margin-top: 15px;">The question papers, notes, PDFs, and other materials available on this website are collected from publicly available or student-shared sources and are provided solely for study and reference purposes. The data displayed on this website is for educational and demonstration purposes only and should not be treated as official college records.</p>
`;

const contentDataPolicy = `
    <p class="anim-item" style="--delay: 0.1s;">ULC LexDrive respects your privacy. This platform is designed only to provide access to available college PYQ PDFs and does <strong>not collect, store, process, sell, or share personal user data</strong>.</p>
`;

// --- 9. Bottom App Actions (Share) ---
function shareApp() {
    const shareData = {
        title: 'ULC LexDrive',
        text: 'Hey! 📚 Struggling to find past year questions? Download ULC LexDrive! It consolidates all our PYQs in one place and helps us prepare better. Let\'s help each other ace these exams!',
        url: 'https://ulclexdrive.com'
    };
    
    if (navigator.share) {
        navigator.share(shareData).catch(console.error);
    } else {
        alert('Copy and share this link: ' + shareData.url);
    }
}

// --- 10. REPLAY CSS ANIMATIONS ON DROPDOWN CLICK ---
document.addEventListener('click', function(e) {
    const summary = e.target.closest('summary');
    if (summary) {
        const details = summary.parentElement;
        
        // If clicking to open, prepare the animation class before it renders
        if (!details.open) {
            details.classList.remove('is-opening');
            void details.offsetWidth; // Force a synchronous layout update
            details.classList.add('is-opening');
        } else {
            // Remove it cleanly when closing
            details.classList.remove('is-opening');
        }
    }
});