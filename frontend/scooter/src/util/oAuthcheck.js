

/**
 * Logs the authentication status.
 *
 * @returns {void} No return value.
 */
export const logAuth = async () => {
    // Check if the authentication id exists in local storage
    if (localStorage.getItem('auth_id')) {
        // Set the 'isLoggedin' flag to true in local storage
        localStorage.setItem('isLoggedIn', 'true');
    }
    return localStorage.getItem('isLoggedIn');
}