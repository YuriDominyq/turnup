<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Verify Your Email</title>
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
            font-size: 26px;
            font-weight: 600;
        }
        .icon {
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            margin: 0 auto 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
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
        .otp-container {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 2px dashed #2563eb;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
            margin: 30px 0;
        }
        .otp-label {
            color: #1e40af;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
        }
        .otp-code {
            font-size: 42px;
            font-weight: 700;
            color: #1e293b;
            letter-spacing: 8px;
            font-family: 'Courier New', monospace;
            margin: 0;
            padding: 15px;
            background: #ffffff;
            border-radius: 8px;
            display: inline-block;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .warning-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 16px;
            border-radius: 8px;
            margin: 25px 0;
        }
        .warning-box p {
            color: #92400e;
            margin: 0;
            font-size: 14px;
            line-height: 1.6;
        }
        .warning-icon {
            display: inline-block;
            margin-right: 6px;
            font-size: 16px;
        }
        .info-box {
            background: #f8fafc;
            border-radius: 8px;
            padding: 18px;
            margin: 20px 0;
        }
        .info-box p {
            color: #64748b;
            font-size: 14px;
            line-height: 1.6;
            margin: 6px 0;
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
            <div class="icon">🔒</div>
            <h1>Verify Your Email Address</h1>
        </div>
        
        <div class="content">
            <p class="greeting">Hi {{ $commuter->first_name }},</p>
            
            <p class="message">
                Welcome to <strong>TurnUp</strong> We're excited to have you on board.
            </p>
            
            <p class="message">
                To complete your registration and secure your account, please enter the verification code below in the app:
            </p>
            
            <div class="otp-container">
                <div class="otp-label">Your Verification Code</div>
                <div class="otp-code">{{ $otp }}</div>
            </div>
            
            <div class="warning-box">
                <p><span class="warning-icon">⚠️</span> <strong>Security reminder:</strong> This code will expire in 10 minutes. Never share this code with anyone, including TurnUp staff.</p>
            </div>
            
            <div class="info-box">
                <p><strong>Didn't request this code?</strong></p>
                <p>If you didn't create an account with TurnUp, please ignore this email or contact our support team if you have concerns.</p>
            </div>
            
            <div class="signature">
                <p>Safe travels,</p>
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