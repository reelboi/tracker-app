
        // ============================================
        // DATA INITIALIZATION
        // ============================================
        
        const START_DATE = new Date('2026-02-21');
        const USER_PROFILE = {
            age: 21,
            height: 178,
            heightFt: "5'10",
            startWeight: 86,
            startBF: 34,
            goalWeight: 70,
            goalBF: { min: 12, max: 14 }
        };

        const STRENGTH_GOALS = {
            bench: { current: 60, goal: 120 },
            squat: { current: 80, goal: 200 },
            deadlift: { current: 100, goal: 210 }
        };

        // Strength Progression Plan
        const STRENGTH_PROGRESSION = [
            { week: 1, bench: 60, squat: 80, deadlift: 100 },
            { week: 4, bench: 70, squat: 100, deadlift: 120 },
            { week: 8, bench: 80, squat: 120, deadlift: 140 },
            { week: 12, bench: 90, squat: 140, deadlift: 160 },
            { week: 16, bench: 105, squat: 170, deadlift: 180 },
            { week: 20, bench: 120, squat: 200, deadlift: 210 }
        ];

        // UPDATED WORKOUT PROGRAM - NEW SCHEDULE
        const WORKOUT_PROGRAM = [
            // Monday - Chest + Triceps + Abs
            {
                day: 'Monday',
                title: 'Chest + Triceps + Abs',
                exercises: [
                    { name: 'Bench Press', sets: 4, reps: '6-8' },
                    { name: 'Incline Bench Press', sets: 3, reps: '8-10' },
                    { name: 'Dumbbell Fly', sets: 3, reps: '12' },
                    { name: 'Cable Crossover', sets: 3, reps: '12' },
                    { name: 'Tricep Pushdown', sets: 3, reps: '12' },
                    { name: 'Overhead Tricep Extension', sets: 3, reps: '10' },
                    { name: 'Dips', sets: 3, reps: '10' },
                    { name: 'Crunches', sets: 3, reps: '20' },
                    { name: 'Plank', sets: 3, reps: '60 sec' }
                ]
            },
            // Tuesday - Back + Biceps + Forearms
            {
                day: 'Tuesday',
                title: 'Back + Biceps + Forearms',
                exercises: [
                    { name: 'Deadlift', sets: 4, reps: '5' },
                    { name: 'Lat Pulldown', sets: 3, reps: '10' },
                    { name: 'Barbell Row', sets: 3, reps: '8' },
                    { name: 'Seated Row', sets: 3, reps: '10' },
                    { name: 'Pullups', sets: 3, reps: 'Max' },
                    { name: 'Barbell Curl', sets: 3, reps: '10' },
                    { name: 'Hammer Curl', sets: 3, reps: '10' },
                    { name: 'Wrist Curl', sets: 3, reps: '15' },
                    { name: 'Reverse Wrist Curl', sets: 3, reps: '15' }
                ]
            },
            // Wednesday - Legs + Shoulders + Abs
            {
                day: 'Wednesday',
                title: 'Legs + Shoulders + Abs',
                exercises: [
                    { name: 'Squats', sets: 4, reps: '6-8' },
                    { name: 'Leg Press', sets: 3, reps: '10' },
                    { name: 'Leg Curl', sets: 3, reps: '12' },
                    { name: 'Leg Extension', sets: 3, reps: '12' },
                    { name: 'Shoulder Press', sets: 4, reps: '8' },
                    { name: 'Lateral Raises', sets: 3, reps: '12' },
                    { name: 'Rear Delt Fly', sets: 3, reps: '12' },
                    { name: 'Hanging Leg Raise', sets: 3, reps: '15' },
                    { name: 'Russian Twist', sets: 3, reps: '20' }
                ]
            },
            // Thursday - Chest + Triceps
            {
                day: 'Thursday',
                title: 'Chest + Triceps',
                exercises: [
                    { name: 'Bench Press', sets: 5, reps: '5' },
                    { name: 'Incline Dumbbell Press', sets: 3, reps: '8' },
                    { name: 'Chest Fly', sets: 3, reps: '12' },
                    { name: 'Close Grip Bench', sets: 3, reps: '8' },
                    { name: 'Tricep Pushdown', sets: 3, reps: '12' },
                    { name: 'Skull Crushers', sets: 3, reps: '10' }
                ]
            },
            // Friday - Back + Biceps + Abs
            {
                day: 'Friday',
                title: 'Back + Biceps + Abs',
                exercises: [
                    { name: 'Deadlift (Light)', sets: 3, reps: '5' },
                    { name: 'Pullups', sets: 3, reps: 'Max' },
                    { name: 'Barbell Row', sets: 3, reps: '8' },
                    { name: 'Lat Pulldown', sets: 3, reps: '10' },
                    { name: 'Face Pull', sets: 3, reps: '12' },
                    { name: 'Barbell Curl', sets: 3, reps: '10' },
                    { name: 'Hammer Curl', sets: 3, reps: '10' },
                    { name: 'Cable Crunch', sets: 3, reps: '15' },
                    { name: 'Plank', sets: 3, reps: '60 sec' }
                ]
            },
            // Saturday - Legs + Shoulders
            {
                day: 'Saturday',
                title: 'Legs + Shoulders',
                exercises: [
                    { name: 'Squat (Light)', sets: 3, reps: '8' },
                    { name: 'Romanian Deadlift', sets: 3, reps: '10' },
                    { name: 'Leg Curl', sets: 3, reps: '12' },
                    { name: 'Calf Raises', sets: 4, reps: '15' },
                    { name: 'Shoulder Press', sets: 3, reps: '10' },
                    { name: 'Lateral Raise', sets: 3, reps: '12' },
                    { name: 'Shrugs', sets: 4, reps: '12' }
                ]
            },
            // Sunday - Recovery
            {
                day: 'Sunday',
                title: 'Recovery Day',
                exercises: [
                    { name: 'Walking', sets: 0, reps: '30-45 min' },
                    { name: 'Stretching', sets: 0, reps: 'Full body' },
                    { name: 'Mobility Work', sets: 0, reps: 'Focus areas' },
                    { name: 'Foam Rolling', sets: 0, reps: 'All muscles' }
                ]
            }
        ];

        // ============================================
        // APP STATE
        // ============================================
        
        let currentDate = new Date();
        let appData = {
            bodyStats: {},
            lifts: {},
            workouts: {},
            meals: {},
            supplements: {},
            typing: {},
            nofap: {
                currentStreak: 0,
                bestStreak: 0,
                cleanDays: {},
                startDate: null
            },
            prs: {
                bench: 60,
                squat: 80,
                deadlift: 100
            }
        };

        // ============================================
        // UTILITY FUNCTIONS
        // ============================================
        
        function formatDate(date) {
            return date.toISOString().split('T')[0];
        }

        function formatDateDisplay(date) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }

        function getDayNumber() {
            const diffTime = currentDate - START_DATE;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return Math.max(1, diffDays);
        }

        function getCurrentWeek() {
            const diffTime = currentDate - START_DATE;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            return Math.max(1, Math.ceil(diffDays / 7));
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2500);
        }

        function saveData() {
            localStorage.setItem('trackProData', JSON.stringify(appData));
        }

        function loadData() {
            const saved = localStorage.getItem('trackProData');
            if (saved) {
                appData = JSON.parse(saved);
            }
        }

        function calculateBMI(weight, heightCm) {
            const heightM = heightCm / 100;
            return (weight / (heightM * heightM)).toFixed(1);
        }

        function getBMICategory(bmi) {
            if (bmi < 18.5) return 'Underweight';
            if (bmi < 25) return 'Normal';
            if (bmi < 30) return 'Overweight';
            return 'Obese';
        }

        // ============================================
        // NAVIGATION - FIXED
        // ============================================
        
        function navigateTo(page) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            
            // Remove active from all nav items
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'));
            
            // Show selected page
            const pageElement = document.getElementById(`page-${page}`);
            if (pageElement) {
                pageElement.classList.add('active');
            }
            
            // Add active to matching nav items
            document.querySelectorAll(`[data-page="${page}"]`).forEach(n => n.classList.add('active'));
            
            window.scrollTo(0, 0);
        }

        // ============================================
        // DATE MANAGEMENT
        // ============================================
        
        function updateDateDisplay() {
            document.getElementById('current-date').textContent = formatDateDisplay(currentDate);
            document.getElementById('day-number').textContent = getDayNumber();
        }

        function changeDate(days) {
            currentDate.setDate(currentDate.getDate() + days);
            updateDateDisplay();
            loadDayData();
        }

        function goToToday() {
            currentDate = new Date();
            updateDateDisplay();
            loadDayData();
        }

        // ============================================
        // BODY STATS
        // ============================================
        
        function saveBodyStats() {
            const weight = parseFloat(document.getElementById('body-weight').value);
            const bf = parseFloat(document.getElementById('body-fat').value);
            
            if (!weight) {
                showToast('Please enter weight');
                return;
            }
            
            const dateKey = formatDate(currentDate);
            appData.bodyStats[dateKey] = { weight, bf: bf || null };
            
            updateDashboardStats();
            saveData();
            showToast('Body stats saved');
            updateBodyCalculations();
        }

        function updateBodyCalculations() {
            const dateKey = formatDate(currentDate);
            const stats = appData.bodyStats[dateKey];
            
            if (stats && stats.weight) {
                const bmi = calculateBMI(stats.weight, USER_PROFILE.height);
                document.getElementById('bmi-value').textContent = bmi;
                document.getElementById('bmi-category').textContent = getBMICategory(parseFloat(bmi));
                
                const weightLost = USER_PROFILE.startWeight - stats.weight;
                const weightProgress = ((weightLost / (USER_PROFILE.startWeight - USER_PROFILE.goalWeight)) * 100).toFixed(0);
                document.getElementById('weight-progress').textContent = 
                    weightLost >= 0 ? `${weightLost.toFixed(1)}kg lost (${weightProgress}%)` : `${Math.abs(weightLost).toFixed(1)}kg gained`;
                
                if (stats.bf) {
                    const bfLost = USER_PROFILE.startBF - stats.bf;
                    document.getElementById('bf-progress').textContent = 
                        bfLost >= 0 ? `${bfLost.toFixed(1)}% lost` : `${Math.abs(bfLost).toFixed(1)}% gained`;
                }
            }
        }

        // ============================================
        // STRENGTH TRACKING
        // ============================================
        
        function saveLifts() {
            const bench = parseFloat(document.getElementById('lift-bench').value);
            const squat = parseFloat(document.getElementById('lift-squat').value);
            const deadlift = parseFloat(document.getElementById('lift-deadlift').value);
            
            const dateKey = formatDate(currentDate);
            appData.lifts[dateKey] = { bench, squat, deadlift };
            
            // Update PRs
            if (bench && bench > appData.prs.bench) appData.prs.bench = bench;
            if (squat && squat > appData.prs.squat) appData.prs.squat = squat;
            if (deadlift && deadlift > appData.prs.deadlift) appData.prs.deadlift = deadlift;
            
            updateStrengthDisplay();
            saveData();
            showToast('Lifts saved');
        }

        function updateStrengthDisplay() {
            document.getElementById('pr-bench').textContent = `${appData.prs.bench} kg`;
            document.getElementById('pr-squat').textContent = `${appData.prs.squat} kg`;
            document.getElementById('pr-deadlift').textContent = `${appData.prs.deadlift} kg`;
            
            // Progress bars
            const benchPct = (appData.prs.bench / 120) * 100;
            const squatPct = (appData.prs.squat / 200) * 100;
            const deadliftPct = (appData.prs.deadlift / 210) * 100;
            
            document.getElementById('strength-bench-bar').style.width = `${Math.min(100, benchPct)}%`;
            document.getElementById('strength-squat-bar').style.width = `${Math.min(100, squatPct)}%`;
            document.getElementById('strength-deadlift-bar').style.width = `${Math.min(100, deadliftPct)}%`;
            
            document.getElementById('strength-bench-current').textContent = appData.prs.bench;
            document.getElementById('strength-squat-current').textContent = appData.prs.squat;
            document.getElementById('strength-deadlift-current').textContent = appData.prs.deadlift;
        }

        function renderProgressionTable() {
            const currentWeek = getCurrentWeek();
            const tbody = document.getElementById('progression-table-body');
            
            tbody.innerHTML = STRENGTH_PROGRESSION.map(row => {
                const isCurrentWeek = currentWeek >= row.week && currentWeek < (STRENGTH_PROGRESSION.find(p => p.week > row.week)?.week || 999);
                return `
                    <tr class="${isCurrentWeek ? 'current-week' : ''}">
                        <td>Week ${row.week}</td>
                        <td>${row.bench} kg</td>
                        <td>${row.squat} kg</td>
                        <td>${row.deadlift} kg</td>
                    </tr>
                `;
            }).join('');
        }

        // ============================================
        // WORKOUT TRACKING
        // ============================================
        
        let currentWorkoutDay = 0;

        function initWorkoutTabs() {
            const tabs = document.querySelectorAll('#workout-day-tabs .day-tab');
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    currentWorkoutDay = index;
                    renderWorkout();
                });
            });
        }

        function renderWorkout() {
            const workout = WORKOUT_PROGRAM[currentWorkoutDay];
            document.getElementById('workout-day-title').textContent = 
                `${workout.day} - ${workout.title}`;
            
            const container = document.getElementById('workout-exercises');
            const dateKey = formatDate(currentDate);
            const savedWorkout = appData.workouts[dateKey];
            
            container.innerHTML = workout.exercises.map((ex, i) => {
                const exerciseData = savedWorkout?.exercises?.[i] || {};
                const isCompleted = exerciseData.completed;
                const isSkipped = exerciseData.skipped;
                
                return `
                    <div class="exercise-card ${isCompleted ? 'completed' : ''} ${isSkipped ? 'skipped' : ''}">
                        <div class="exercise-header">
                            <span class="exercise-name">${ex.name}</span>
                        </div>
                        <div class="exercise-details">
                            <div class="exercise-detail">
                                <strong>${ex.sets}</strong> Sets
                            </div>
                            <div class="exercise-detail">
                                <strong>${ex.reps}</strong> Reps
                            </div>
                        </div>
                        <div class="exercise-actions">
                            <input type="number" class="input-field exercise-input" 
                                   placeholder="Weight (kg)" 
                                   value="${exerciseData.weight || ''}"
                                   data-exercise="${i}" data-field="weight">
                            <button class="btn btn-sm ${isCompleted ? 'btn-success' : 'btn-secondary'}" 
                                    onclick="toggleExerciseStatus(${i}, 'completed')">
                                ${isCompleted ? 'Done' : 'Complete'}
                            </button>
                            <button class="btn btn-sm ${isSkipped ? 'btn-danger' : 'btn-secondary'}" 
                                    onclick="toggleExerciseStatus(${i}, 'skipped')">
                                ${isSkipped ? 'Skipped' : 'Skip'}
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function toggleExerciseStatus(index, status) {
            const dateKey = formatDate(currentDate);
            if (!appData.workouts[dateKey]) {
                appData.workouts[dateKey] = { exercises: {}, duration: 0 };
            }
            if (!appData.workouts[dateKey].exercises) {
                appData.workouts[dateKey].exercises = {};
            }
            
            const exercise = appData.workouts[dateKey].exercises[index] || {};
            
            if (status === 'completed') {
                exercise.completed = !exercise.completed;
                if (exercise.completed) exercise.skipped = false;
            } else {
                exercise.skipped = !exercise.skipped;
                if (exercise.skipped) exercise.completed = false;
            }
            
            appData.workouts[dateKey].exercises[index] = exercise;
            saveData();
            renderWorkout();
        }

        function saveWorkout() {
            const dateKey = formatDate(currentDate);
            if (!appData.workouts[dateKey]) {
                appData.workouts[dateKey] = { exercises: {}, duration: 0 };
            }
            
            const duration = parseInt(document.getElementById('workout-duration').value) || 0;
            appData.workouts[dateKey].duration = duration;
            
            document.querySelectorAll('[data-exercise]').forEach(input => {
                const index = input.dataset.exercise;
                const field = input.dataset.field;
                if (!appData.workouts[dateKey].exercises[index]) {
                    appData.workouts[dateKey].exercises[index] = {};
                }
                appData.workouts[dateKey].exercises[index][field] = parseFloat(input.value) || null;
            });
            
            saveData();
            showToast('Workout saved');
        }

        // ============================================
        // DIET TRACKING
        // ============================================
        
        function addMeal() {
            const name = document.getElementById('meal-name').value;
            const calories = parseInt(document.getElementById('meal-calories').value) || 0;
            const protein = parseInt(document.getElementById('meal-protein').value) || 0;
            const carbs = parseInt(document.getElementById('meal-carbs').value) || 0;
            const fat = parseInt(document.getElementById('meal-fat').value) || 0;
            
            if (!name) {
                showToast('Please enter meal name');
                return;
            }
            
            const dateKey = formatDate(currentDate);
            if (!appData.meals[dateKey]) {
                appData.meals[dateKey] = [];
            }
            
            appData.meals[dateKey].push({ name, calories, protein, carbs, fat });
            saveData();
            
            document.getElementById('meal-name').value = '';
            document.getElementById('meal-calories').value = '';
            document.getElementById('meal-protein').value = '';
            document.getElementById('meal-carbs').value = '';
            document.getElementById('meal-fat').value = '';
            
            renderMeals();
            showToast('Meal added');
        }

        function deleteMeal(index) {
            const dateKey = formatDate(currentDate);
            if (appData.meals[dateKey]) {
                appData.meals[dateKey].splice(index, 1);
                saveData();
                renderMeals();
            }
        }

        function renderMeals() {
            const dateKey = formatDate(currentDate);
            const meals = appData.meals[dateKey] || [];
            
            let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;
            
            const container = document.getElementById('meals-list');
            container.innerHTML = meals.map((meal, i) => {
                totalCalories += meal.calories;
                totalProtein += meal.protein;
                totalCarbs += meal.carbs;
                totalFat += meal.fat;
                
                return `
                    <div class="meal-entry">
                        <div class="meal-header">
                            <span class="meal-name">${meal.name}</span>
                            <button class="delete-btn" onclick="deleteMeal(${i})">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="18" y1="6" x2="6" y2="18"/>
                                    <line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                        <div class="meal-macros">
                            <div class="macro-item">
                                <div class="macro-value">${meal.calories}</div>
                                <div class="macro-label">Cal</div>
                            </div>
                            <div class="macro-item">
                                <div class="macro-value">${meal.protein}g</div>
                                <div class="macro-label">Protein</div>
                            </div>
                            <div class="macro-item">
                                <div class="macro-value">${meal.carbs}g</div>
                                <div class="macro-label">Carbs</div>
                            </div>
                            <div class="macro-item">
                                <div class="macro-value">${meal.fat}g</div>
                                <div class="macro-label">Fat</div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('') || '<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No meals logged today</p>';
            
            document.getElementById('total-calories').textContent = totalCalories;
            document.getElementById('total-protein').textContent = totalProtein;
            document.getElementById('total-carbs').textContent = totalCarbs;
            document.getElementById('total-fat').textContent = totalFat;
            
            document.getElementById('dash-calories').textContent = totalCalories;
            document.getElementById('dash-protein').textContent = totalProtein;
            document.getElementById('dash-carbs').textContent = totalCarbs;
            document.getElementById('dash-fat').textContent = totalFat;
        }

        // ============================================
        // SUPPLEMENTS
        // ============================================
        
        function toggleSupplement(el, supplement) {
            el.classList.toggle('active');
            const card = el.closest('.supplement-card');
            card.classList.toggle('taken');
            
            const dateKey = formatDate(currentDate);
            if (!appData.supplements[dateKey]) {
                appData.supplements[dateKey] = {};
            }
            appData.supplements[dateKey][supplement] = el.classList.contains('active');
            saveData();
            showToast('Supplement updated');
        }

        function loadSupplements() {
            const dateKey = formatDate(currentDate);
            const supplements = appData.supplements[dateKey] || {};
            
            document.querySelectorAll('.supplement-card').forEach(card => {
                const supplement = card.dataset.supplement;
                const toggle = card.querySelector('.toggle');
                if (supplements[supplement]) {
                    toggle.classList.add('active');
                    card.classList.add('taken');
                } else {
                    toggle.classList.remove('active');
                    card.classList.remove('taken');
                }
            });
        }

        // ============================================
        // TYPING STATS
        // ============================================
        
        function saveTypingStats() {
            const gross = parseInt(document.getElementById('typing-gross').value) || 0;
            const net = parseInt(document.getElementById('typing-net').value) || 0;
            const errors = parseInt(document.getElementById('typing-errors').value) || 0;
            const accuracy = parseFloat(document.getElementById('typing-accuracy').value) || 0;
            const time = parseFloat(document.getElementById('typing-time').value) || 0;
            
            const dateKey = formatDate(currentDate);
            if (!appData.typing[dateKey]) {
                appData.typing[dateKey] = {};
            }
            
            appData.typing[dateKey].stats = { gross, net, errors, accuracy, time };
            saveData();
            
            updateTypingDisplay();
            showToast('Typing stats saved');
        }

        function saveWordCount() {
            const totalWords = parseInt(document.getElementById('typing-total-words').value) || 0;
            const backspaceWords = parseInt(document.getElementById('typing-backspace-words').value) || 0;
            const noBackspaceWords = parseInt(document.getElementById('typing-no-backspace-words').value) || 0;
            
            const dateKey = formatDate(currentDate);
            if (!appData.typing[dateKey]) {
                appData.typing[dateKey] = {};
            }
            
            appData.typing[dateKey].words = { totalWords, backspaceWords, noBackspaceWords };
            saveData();
            
            updateTypingDisplay();
            showToast('Word count saved');
        }

        function updateTypingDisplay() {
            const dateKey = formatDate(currentDate);
            const data = appData.typing[dateKey] || {};
            
            document.getElementById('today-net-wpm').textContent = data.stats?.net || '--';
            document.getElementById('today-accuracy').textContent = data.stats?.accuracy ? `${data.stats.accuracy}%` : '--%';
            document.getElementById('today-total-words').textContent = data.words?.totalWords || '--';
            document.getElementById('today-clean-words').textContent = data.words?.noBackspaceWords || '--';
            
            if (data.stats?.net) {
                document.getElementById('dash-wpm').textContent = data.stats.net;
            }
        }

        // ============================================
        // NOFAP TRACKING
        // ============================================
        
        function markCleanDay() {
            const dateKey = formatDate(currentDate);
            
            if (!appData.nofap.startDate) {
                appData.nofap.startDate = dateKey;
            }
            
            appData.nofap.cleanDays[dateKey] = true;
            appData.nofap.currentStreak++;
            
            if (appData.nofap.currentStreak > appData.nofap.bestStreak) {
                appData.nofap.bestStreak = appData.nofap.currentStreak;
            }
            
            saveData();
            updateNoFapDisplay();
            showToast('Clean day recorded');
        }

        function resetStreak() {
            if (confirm('Are you sure you want to reset your streak?')) {
                appData.nofap.currentStreak = 0;
                appData.nofap.startDate = null;
                saveData();
                updateNoFapDisplay();
                showToast('Streak reset');
            }
        }

        function updateNoFapDisplay() {
            document.getElementById('current-streak').textContent = appData.nofap.currentStreak;
            document.getElementById('best-streak').textContent = appData.nofap.bestStreak;
            
            const totalCleanDays = Object.keys(appData.nofap.cleanDays).length;
            document.getElementById('total-clean-days').textContent = totalCleanDays;
            
            document.getElementById('dash-streak').textContent = appData.nofap.currentStreak;
            document.getElementById('dash-best-streak').textContent = appData.nofap.bestStreak;
        }

        // ============================================
        // DASHBOARD UPDATE
        // ============================================
        
        function updateDashboardStats() {
            const dateKey = formatDate(currentDate);
            
            const bodyStats = appData.bodyStats[dateKey];
            if (bodyStats) {
                document.getElementById('dash-weight').textContent = bodyStats.weight;
                document.getElementById('dash-bf').textContent = bodyStats.bf || '--';
                
                document.getElementById('body-weight').value = bodyStats.weight;
                document.getElementById('body-fat').value = bodyStats.bf || '';
            }
            
            const lifts = appData.lifts[dateKey];
            if (lifts) {
                document.getElementById('dash-bench').textContent = lifts.bench || appData.prs.bench;
                document.getElementById('dash-squat').textContent = lifts.squat || appData.prs.squat;
                document.getElementById('dash-deadlift').textContent = lifts.deadlift || appData.prs.deadlift;
                
                document.getElementById('lift-bench').value = lifts.bench || '';
                document.getElementById('lift-squat').value = lifts.squat || '';
                document.getElementById('lift-deadlift').value = lifts.deadlift || '';
            }
            
            const benchPct = Math.min(100, (appData.prs.bench / 120) * 100);
            const squatPct = Math.min(100, (appData.prs.squat / 200) * 100);
            const deadliftPct = Math.min(100, (appData.prs.deadlift / 210) * 100);
            
            document.getElementById('bench-progress').style.width = `${benchPct}%`;
            document.getElementById('squat-progress').style.width = `${squatPct}%`;
            document.getElementById('deadlift-progress').style.width = `${deadliftPct}%`;
        }

        // ============================================
        // PROGRESS CHARTS
        // ============================================
        
        function drawChart(canvasId, labels, datasets) {
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            const rect = canvas.getBoundingClientRect();
            
            canvas.width = rect.width * 2;
            canvas.height = rect.height * 2;
            ctx.scale(2, 2);
            
            const width = rect.width;
            const height = rect.height;
            const padding = 40;
            
            ctx.clearRect(0, 0, width, height);
            
            ctx.strokeStyle = '#21262d';
            ctx.lineWidth = 1;
            
            for (let i = 0; i <= 4; i++) {
                const y = padding + ((height - padding * 2) / 4) * i;
                ctx.beginPath();
                ctx.moveTo(padding, y);
                ctx.lineTo(width - padding, y);
                ctx.stroke();
            }
            
            if (labels.length < 2) {
                ctx.fillStyle = '#8b949e';
                ctx.font = '12px Space Grotesk';
                ctx.textAlign = 'center';
                ctx.fillText('Not enough data', width / 2, height / 2);
                return;
            }
            
            datasets.forEach(dataset => {
                const maxVal = Math.max(...dataset.data);
                const minVal = Math.min(...dataset.data);
                const range = maxVal - minVal || 1;
                
                ctx.strokeStyle = dataset.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                
                dataset.data.forEach((val, i) => {
                    const x = padding + ((width - padding * 2) / (dataset.data.length - 1)) * i;
                    const y = height - padding - ((val - minVal) / range) * (height - padding * 2);
                    
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                });
                
                ctx.stroke();
                
                ctx.fillStyle = dataset.color;
                dataset.data.forEach((val, i) => {
                    const x = padding + ((width - padding * 2) / (dataset.data.length - 1)) * i;
                    const y = height - padding - ((val - minVal) / range) * (height - padding * 2);
                    ctx.beginPath();
                    ctx.arc(x, y, 4, 0, Math.PI * 2);
                    ctx.fill();
                });
            });
        }

        function updateCharts() {
            const sortedDates = Object.keys(appData.bodyStats).sort();
            
            const weightLabels = sortedDates;
            const weightData = sortedDates.map(d => appData.bodyStats[d].weight);
            drawChart('weight-chart', weightLabels, [{
                data: weightData,
                color: '#00d4aa'
            }]);
            
            const bfData = sortedDates.map(d => appData.bodyStats[d].bf).filter(Boolean);
            if (bfData.length > 0) {
                const bfDates = sortedDates.filter(d => appData.bodyStats[d].bf);
                drawChart('bf-chart', bfDates, [{
                    data: bfData,
                    color: '#f7931a'
                }]);
            }
            
            const liftDates = Object.keys(appData.lifts).sort();
            const benchData = liftDates.map(d => appData.lifts[d].bench).filter(Boolean);
            const squatData = liftDates.map(d => appData.lifts[d].squat).filter(Boolean);
            const deadliftData = liftDates.map(d => appData.lifts[d].deadlift).filter(Boolean);
            
            if (benchData.length || squatData.length || deadliftData.length) {
                drawChart('strength-chart', liftDates, [
                    { data: benchData, color: '#f59e0b' },
                    { data: squatData, color: '#3b82f6' },
                    { data: deadliftData, color: '#10b981' }
                ]);
            }
            
            const typingDates = Object.keys(appData.typing).sort();
            const wpmData = typingDates.map(d => appData.typing[d].stats?.net).filter(Boolean);
            
            if (wpmData.length > 0) {
                const wpmDates = typingDates.filter(d => appData.typing[d].stats?.net);
                drawChart('typing-chart', wpmDates, [{
                    data: wpmData,
                    color: '#00d4aa'
                }]);
            }
        }

        // ============================================
        // LOAD DAY DATA
        // ============================================
        
        function loadDayData() {
            updateDateDisplay();
            updateDashboardStats();
            updateBodyCalculations();
            updateStrengthDisplay();
            renderWorkout();
            renderMeals();
            loadSupplements();
            updateTypingDisplay();
            updateNoFapDisplay();
            updateCharts();
            renderProgressionTable();
        }

        // ============================================
        // EVENT LISTENERS - FIXED
        // ============================================
        
        // Desktop sidebar navigation
        document.querySelectorAll('.sidebar .nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const page = this.dataset.page;
                if (page) {
                    navigateTo(page);
                }
            });
        });

        // Mobile navigation - FIXED: proper event binding
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const page = this.dataset.page;
                if (page) {
                    navigateTo(page);
                }
            });
        });

        // Touch event for mobile
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            item.addEventListener('touchend', function(e) {
                e.preventDefault();
                const page = this.dataset.page;
                if (page) {
                    navigateTo(page);
                }
            });
        });

        // ============================================
        // INITIALIZATION
        // ============================================
        
        function init() {
            loadData();
            initWorkoutTabs();
            updateDateDisplay();
            loadDayData();
            renderProgressionTable();
            
            const today = new Date();
            currentDate = today > START_DATE ? today : new Date(START_DATE);
            updateDateDisplay();
            loadDayData();
        }

        // Start the app
        init();
    
