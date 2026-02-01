<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// This is a basic example. In production, you'd have a database and more complex logic.

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $role = strtolower(trim($input['role'] ?? ''));
    $experience = $input['experience'] ?? 'beginner';
    
    // You can add server-side logic here for database storage, analytics, etc.
    
    $response = [
        'success' => true,
        'message' => 'Roadmap generated successfully',
        'role' => $role,
        'experience' => $experience,
        'timestamp' => date('Y-m-d H:i:s')
    ];
    
    echo json_encode($response);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>
