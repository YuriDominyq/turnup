<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Welcome to TurnUp</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f1f5f9;
            margin: 0;
            padding: 40px 20px;
        }
        .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            padding: 35px 30px;
            text-align: center;
        }
        .header h1 {
            color: #fff;
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .status-badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            color: #fff;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 12px;
            border: 1px solid rgba(255,255,255,0.3);
        }
        .content {
            padding: 35px 30px;
        }
        .greeting {
            font-size: 20px;
            color: #1e293b;
            margin: 0 0 20px 0;
            font-weight: 600;
        }
        .message {
            color: #475569;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 16px;
        }
        .approval-box {
            background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
            border-left: 4px solid #10b981;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
        }
        .approval-box p {
            color: #047857;
            margin: 0;
            font-size: 15px;
            font-weight: 500;
        }
        .info-section {
            background: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
        }
        .info-section h3 {
            color: #1e293b;
            margin: 0 0 12px 0;
            font-size: 17px;
            font-weight: 600;
        }
        .info-section p {
            color: #64748b;
            font-size: 15px;
            line-height: 1.6;
            margin: 8px 0;
        }
        .signature {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
        }
        .signature p {
            color: #64748b;
            font-size: 15px;
            margin: 5px 0;
        }
        .signature strong {
            color: #1e293b;
        }
        .footer {
            background: #f8fafc;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .footer p {
            color: #64748b;
            font-size: 13px;
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="header">
            <div class="status-badge">APPROVED</div>
            <h1>Welcome to TurnUp! 🎉</h1>
        </div>
        
        <div class="content">
            <p class="greeting">Hi {{ $driver->first_name }},</p>
            
            <p class="message">
                We're excited to let you know that your driver application has been approved! You're now officially part of the TurnUp community.
            </p>
            
            <div class="approval-box">
                <p>✓ Your driver account is active and ready to go</p>
            </div>
            
            <p class="message">
                You can now log in to your account using the credentials you created during registration. Once you're in, you'll be able to view your assigned routes and start accepting trips right away.
            </p>
            
            <div class="info-section">
                <h3>What happens next?</h3>
                <p>• Log in to your driver account on TurnUp Driver App</p>
                <p>• Check your assigned routes and schedules</p>
            </div>
            
            <p class="message">
                If you need any help getting started or have questions, don't hesitate to reach out to our support team. We're here to make sure you have everything you need.
            </p>
            
            <div class="signature">
                <p>Welcome aboard,</p>
                <p><strong>S.T.A.R</strong></p>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>S.T.A.R</strong></p>
            <p>&copy; {{ date('Y') }} TurnUp. All rights reserved.</p>
        </div>
    </div>
</body>
</html>