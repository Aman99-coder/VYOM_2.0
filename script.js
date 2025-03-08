// /*// If already logged in, go to dashboard
// if (window.location.pathname.includes("login.html")) {
//     if (localStorage.getItem("isLoggedIn") === "true") {
//         window.location.href = "dashboard.html";
//     }
// }

// // Redirect logged-in users away from the login page
// if (window.location.pathname.includes("login.html")) {
//     if (localStorage.getItem("isLoggedIn") === "true") {
//         window.location.href = "dashboard.html";
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.querySelector("#loginForm");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault();

//             const loginEmail = document.querySelector("#login-email").value;
//             const loginPassword = document.querySelector("#login-password").value;
//             const savedData = JSON.parse(localStorage.getItem("userData"));

//             if (savedData && savedData["email"] === loginEmail && savedData["password"] === loginPassword) {
//                 //  Store login state
//                 localStorage.setItem("isLoggedIn", "true");

//                 alert("Login successful! Redirecting to dashboard...");
//                 window.location.href = "dashboard.html";
//             } else {
//                 alert("Invalid email or password.");
//             }
//         });
//     }
// });
// document.addEventListener("DOMContentLoaded", function() {
//     const logoutBtn = document.querySelector("#logoutBtn");
//     if (logoutBtn) {
//         logoutBtn.addEventListener("click", function(event) {
//             event.preventDefault();
//             localStorage.removeItem("isLoggedIn");
//             alert("Logged out successfully!");
//             window.location.href = "login.html";
//         });
//     }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const signupForm = document.querySelector("#signupForm");
//     if (signupForm) {
//         signupForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             const userEmail = document.querySelector("#email").value;
//             const userPassword = document.querySelector("#password").value;

//             const userData = {
//                 email: userEmail,
//                 password: userPassword
//             };

//             localStorage.setItem("userData", JSON.stringify(userData));
//             alert("Signup successful! You can now log in.");
//             window.location.href = "login.html";
//         });
//     }
// });
// document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.querySelector("#loginForm");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function(event) {
//             event.preventDefault();

//             const loginEmail = document.querySelector("#login-email").value;
//             const loginPassword = document.querySelector("#login-password").value;
//             const savedData = JSON.parse(localStorage.getItem("userData"));

//             if (!savedData) {
//                 alert("No user data found. Please sign up first.");
//                 return;
//             }

//             if (savedData.email === loginEmail && savedData.password === loginPassword) {
//                 localStorage.setItem("isLoggedIn", "true");
//                 alert("Login successful! Redirecting to dashboard...");
//                 window.location.href = "dashboard.html";
//             } else {
//                 alert("Invalid email or password. Please try again.");
//             }
//         });
//     }
// });
// */
// //  If already logged in, redirect to dashboard
// if /*(window.location.pathname.includes("login.html")) {
//     if (localStorage.getItem("isLoggedIn") === "true") {
//         window.location.href = "dashboard.html";
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {

//     //  Signup Handling (Saves User Data)
//    /* const signupForm = document.querySelector("#signupForm");
//     if (signupForm) {
//         signupForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             const userEmail = document.querySelector("#email").value.trim();
//             const userPassword = document.querySelector("#password").value;
//             const userRole = document.querySelector("#role") ? document.querySelector("#role").value : "volunteer"; // Default role

//             if (!userEmail || !userPassword) {
//                 alert("Please enter both email and password.");
//                 return;
//             }

//             const userData = {
//                 email: userEmail,
//                 password: userPassword,
//                 role: userRole
//             };

//             localStorage.setItem("userData", JSON.stringify(userData));
//             alert("Signup successful! You can now log in.");
//             window.location.href = "login.html";
//         });
//     }*/
//        /* document.addEventListener("DOMContentLoaded", function () {
//             const signupForm = document.querySelector("#signupForm");
        
//             if (signupForm) {
//                 signupForm.addEventListener("submit", function (event) {
//                     event.preventDefault();
        
//                     const orgName = document.querySelector("#org-name").value.trim();
//                     const regNumber = document.querySelector("#reg-number").value.trim();
//                     const details = document.querySelector("#details").value.trim();
//                     const orgEmail = document.querySelector("#org-email").value.trim();
//                     const orgPassword = document.querySelector("#org-password").value;
        
//                     if (!orgName || !regNumber || !details || !orgEmail || !orgPassword) {
//                         alert("Please fill out all fields.");
//                         return;
//                     }
        
//                     const orgData = {
//                         name: orgName,
//                         registrationNumber: regNumber,
//                         details: details,
//                         email: orgEmail,
//                         password: orgPassword,
//                         role: "organization"
//                     };
        
//                     localStorage.setItem("userData", JSON.stringify(orgData));
//                     alert("Signup successful! You can now log in.");
//                     window.location.href = "login.html";
//                 });
//             }
//         });
        

//     //  Login Handling (Checks Credentials)
//     const loginForm = document.querySelector("#loginForm");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             const loginEmail = document.querySelector("#login-email").value.trim();
//             const loginPassword = document.querySelector("#login-password").value;
//             const savedData = JSON.parse(localStorage.getItem("userData"));

//             if (!savedData || !savedData.email || !savedData.password) {
//                 alert("No user data found. Please sign up first.");
//                 return;
//             }

//             if (savedData.email === loginEmail && savedData.password === loginPassword) {
//                 localStorage.setItem("isLoggedIn", "true");
//                 alert("Login successful! Redirecting to dashboard...");
//                 window.location.href = "dashboard.html";
//             } else {
//                 alert("Invalid email or password. Please try again.");
//             }
//         });
//     }

//     //  Logout Handling (Clears Local Storage)
//     const logoutBtn = document.querySelector("#logoutBtn");
//     if (logoutBtn) {
//         logoutBtn.addEventListener("click", function (event) {
//             event.preventDefault();
//             localStorage.removeItem("isLoggedIn");
//             alert("Logged out successfully!");
//             window.location.href = "login.html";
//         });
//     }
// });*/

// /*document.addEventListener("DOMContentLoaded", function () {

//     //  Redirect logged-in users away from login page
//     if (window.location.pathname.includes("login.html")) {
//         if (localStorage.getItem("isLoggedIn") === "true") {
//             window.location.href = "dashboard.html";
//         }
//     }

//     //  Signup Handling (Saves User Data)
//     const signupForm = document.querySelector("#signupForm");
//     if (signupForm) {
//         signupForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             // Get input values
//             const orgName = document.querySelector("#org-name")?.value.trim() || "";
//             const regNumber = document.querySelector("#reg-number")?.value.trim() || "";
//             const details = document.querySelector("#details")?.value.trim() || "";
//             const userEmail = document.querySelector("#org-email")?.value.trim() || document.querySelector("#email")?.value.trim();
//             const userPassword = document.querySelector("#org-password")?.value || document.querySelector("#password")?.value;
//             const userRole = document.querySelector("#role")?.value || "volunteer"; // Default role

//             // Validate inputs
//             if (!userEmail || !userPassword) {
//                 alert("Please enter both email and password.");
//                 return;
//             }

//             // Create user data object
//             const userData = {
//                 name: orgName,
//                 registrationNumber: regNumber,
//                 details: details,
//                 email: userEmail,
//                 password: userPassword,
//                 role: userRole
//             };

//             // Save user data to localStorage
//             localStorage.setItem("userData", JSON.stringify(userData));
//             alert("Signup successful! You can now log in.");
//             window.location.href = "login.html";
//         });
//     }

//     //  Login Handling (Checks Credentials)
//     const loginForm = document.querySelector("#loginForm");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             const loginEmail = document.querySelector("#login-email").value.trim();
//             const loginPassword = document.querySelector("#login-password").value;
//             const savedData = JSON.parse(localStorage.getItem("userData"));

//             // Validate stored data
//             if (!savedData || !savedData.email || !savedData.password) {
//                 alert("No user data found. Please sign up first.");
//                 return;
//             }

//             // Check if credentials match
//             if (savedData.email === loginEmail && savedData.password === loginPassword) {
//                 localStorage.setItem("isLoggedIn", "true");
//                 alert("Login successful! Redirecting to dashboard...");
//                 window.location.href = "dashboard.html";
//             } else {
//                 alert("Invalid email or password. Please try again.");
//             }
//         });
//     }

//     //  Logout Handling (Clears Local Storage)
//     const logoutBtn = document.querySelector("#logoutBtn");
//     if (logoutBtn) {
//         logoutBtn.addEventListener("click", function (event) {
//             event.preventDefault();
//             localStorage.removeItem("isLoggedIn");
//             alert("Logged out successfully!");
//             window.location.href = "login.html";
//         });
//     }
// });
// */
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Script Loaded!"); // Debugging message

//     // ✅ Auto-Redirect to Dashboard if Already Logged In
//     if (window.location.pathname.includes("login.html")) {
//         if (localStorage.getItem("isLoggedIn") === "true") {
//             console.log("User already logged in, redirecting to dashboard...");
//             window.location.href = "dashboard.html";
//         }
//     }

//     // ✅ Signup Handling (Save User Data in Local Storage)
//     const signupForm = document.querySelector("#signupForm");
//     if (signupForm) {
//         signupForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             // Get input values
//             const orgName = document.querySelector("#org-name")?.value.trim() || "";
//             const regNumber = document.querySelector("#reg-number")?.value.trim() || "";
//             const details = document.querySelector("#details")?.value.trim() || "";
//             const userEmail = document.querySelector("#org-email")?.value.trim() || document.querySelector("#email")?.value.trim();
//             const userPassword = document.querySelector("#org-password")?.value || document.querySelector("#password")?.value;
//             const userRole = document.querySelector("#role")?.value || "volunteer"; // Default to volunteer

//             // Validate required fields
//             if (!userEmail || !userPassword) {
//                 alert("Please enter both email and password.");
//                 return;
//             }

//             // Create user data object
//             const userData = {
//                 name: orgName,
//                 registrationNumber: regNumber,
//                 details: details,
//                 email: userEmail,
//                 password: userPassword,
//                 role: userRole
//             };

//             // Save user data in localStorage
//             localStorage.setItem("userData", JSON.stringify(userData));
//             alert("Signup successful! Redirecting to login...");
//             window.location.href = "login.html";
//         });
//     }

//     // ✅ Login Handling (Check Credentials & Redirect)
//     const loginForm = document.querySelector("#loginForm");
//     if (loginForm) {
//         loginForm.addEventListener("submit", function (event) {
//             event.preventDefault();

//             const loginEmail = document.querySelector("#login-email").value.trim();
//             const loginPassword = document.querySelector("#login-password").value;
//             const savedData = JSON.parse(localStorage.getItem("userData"));

//             // Debugging
//             console.log("Saved Data from Storage:", savedData);

//             // Check if user exists in Local Storage
//             if (!savedData || !savedData.email || !savedData.password) {
//                 alert("No user found. Please sign up first.");
//                 return;
//             }

//             // Check credentials
//             if (savedData.email === loginEmail && savedData.password === loginPassword) {
//                 localStorage.setItem("isLoggedIn", "true");
//                 alert("Login successful! Redirecting to dashboard...");
//                 window.location.href = "dashboard.html";
//             } else {
//                 alert("Invalid email or password. Please try again.");
//             }
//         });
//     }

//     // ✅ Logout Handling (Clear Session & Redirect)
//     const logoutBtn = document.querySelector("#logoutBtn");
//     if (logoutBtn) {
//         logoutBtn.addEventListener("click", function (event) {
//             event.preventDefault();
//             localStorage.removeItem("isLoggedIn");
//             alert("Logged out successfully!");
//             window.location.href = "login.html";
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded!"); // Debugging message

    // ✅ Auto-Redirect Logged-In Users
    if (window.location.pathname.includes("login.html")) {
        if (localStorage.getItem("isLoggedIn") === "true") {
            const savedData = JSON.parse(localStorage.getItem("userData"));
            if (savedData.role === "organization") {
                window.location.href = "post-job.html";
            } else {
                window.location.href = "dashboard.html";
            }
        }
    }

    // ✅ Signup Handling (Save User Data in Local Storage)
    const signupForm = document.querySelector("#signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get input values
            const orgName = document.querySelector("#org-name")?.value.trim() || "";
            const regNumber = document.querySelector("#reg-number")?.value.trim() || "";
            const details = document.querySelector("#details")?.value.trim() || "";
            const userEmail = document.querySelector("#org-email")?.value.trim() || document.querySelector("#email")?.value.trim();
            const userPassword = document.querySelector("#org-password")?.value || document.querySelector("#password")?.value;
            const userRole = document.querySelector("#role")?.value || "volunteer"; // Default to volunteer

            // Validate required fields
            if (!userEmail || !userPassword) {
                alert("Please enter both email and password.");
                return;
            }

            // Create user data object
            const userData = {
                name: orgName,
                registrationNumber: regNumber,
                details: details,
                email: userEmail,
                password: userPassword,
                role: userRole
            };

            // Save user data in localStorage
            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Signup successful! Redirecting to login...");
            window.location.href = "login.html";
        });
    }

    // ✅ Login Handling (Check Credentials & Redirect Based on Role)
    const loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const loginEmail = document.querySelector("#login-email").value.trim();
            const loginPassword = document.querySelector("#login-password").value;
            const savedData = JSON.parse(localStorage.getItem("userData"));

            // Debugging
            console.log("Saved Data from Storage:", savedData);

            // Check if user exists in Local Storage
            if (!savedData || !savedData.email || !savedData.password) {
                alert("No user found. Please sign up first.");
                return;
            }

            // Check credentials
            if (savedData.email === loginEmail && savedData.password === loginPassword) {
                localStorage.setItem("isLoggedIn", "true");

                // Redirect based on role
                if (savedData.role === "organization") {
                    alert("Login successful! Redirecting to post a job...");
                    window.location.href = "post-job.html";
                } else {
                    alert("Login successful! Redirecting to dashboard...");
                    window.location.href = "dashboard.html";
                }
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }

    // ✅ Logout Handling (Clear Session & Redirect)
    const logoutBtn = document.querySelector("#logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userData");
            alert("Logged out successfully!");
            window.location.href = "login.html";
        });
    }
});
