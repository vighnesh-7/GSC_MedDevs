# MedDevs
Welcome to MedDevs!

Our project is dedicated to revolutionizing healthcare accessibility and convenience through innovative technology. Whether you're a patient seeking remote healthcare services or a healthcare provider looking to streamline your practice, our platform offers a comprehensive solution tailored to your needs.

## Introduction
MedDevs is an online platform designed to facilitate remote healthcare services, providing a seamless experience for patients, healthcare providers, caregivers, and health organizations. Our goal is to enhance communication, accessibility, and efficiency in healthcare delivery, ultimately improving health outcomes and well-being for all.

## Getting Started
Ready to experience the future of healthcare? Visit MedDevs and start your journey towards better health and well-being today!

1. Clone the repository:
   ```bash
   git clone https://github.com/vighnesh-7/GSC_MedDevs.git
   ```

2. Navigate to the project directory:
   ```bash
   cd GSC_MedDevs
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application at [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable                            | Description                              | Example Value               |
| ----------------------------------- | ---------------------------------------- | --------------------------- |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`     | URL for sign-in page                     | `/sign-in`                  |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`     | URL for sign-up page                     | `/sign-up`                  |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`| URL after sign-in                        | `/`                         |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`| URL after sign-up                        | `/`                         |
| `DATABASE_URL`                      | NeonTech database URL                    | `your_neontech_database_url`|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key                    | `your_publishable_key`      |
| `CLERK_SECRET_KEY`                  | Clerk secret key                         | `your_clerk_key`            |


### Prisma Setup
To handle the object relations, we use Prisma ORM. Follow these commands to set up Prisma:

1. Initialize Prisma in your project:
   ```bash
   npx prisma init
   ```

2. Push the Prisma schema to your database:
   ```bash
   npx prisma db push
   ```

3. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

## How to Use
To get started with MedDevs, follow these simple steps:

1. **Sign Up or Log In:** If you're a new user, sign up for an account. If you're already registered, log in using your credentials.
   
2. **Explore Features:** Take some time to explore the various features and functionalities of the platform, including:
   - Appointment booking
   - Video consultations with the assigned Doctor
   - Medicine Prescriber Chatbot
   - Dietitian Chatbot
   - Fundraiser to support free camps and health care check-ups
   - Daily routine scheduler

3. **Personalize Your Experience**

4. **Connect with Healthcare Providers:** Use our platform to connect with healthcare providers, schedule appointments, and communicate securely from the comfort of your home.

5. **Get Involved:** Participate in fundraising initiatives and community events to support broader healthcare causes and initiatives.

![image](https://github.com/vighnesh-7/GSC_MedDevs/assets/156537424/6d691d54-9f8f-4a89-8051-677d6ea5fc8e)

https://github.com/vighnesh-7/Next-js_Team_MedDevs/assets/156537424/927e20da-b5ab-465b-860e-934a44c1e4b3

