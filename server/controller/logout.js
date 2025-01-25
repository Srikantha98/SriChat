async function logout(request, response) {
    try {
        const cookieOptions = {
            httpOnly: true,  // Corrected 'http' to 'httpOnly'
            secure: true
        };

        return response.cookie('token', '', cookieOptions).status(200).json({
            message: "session out",
            success: true
        });
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

// Use CommonJS export
module.exports = logout;
