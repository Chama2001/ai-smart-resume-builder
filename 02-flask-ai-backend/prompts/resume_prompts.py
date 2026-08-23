def get_ats_optimization_prompt(user_details, job_description):
    """
    Generates a structured prompt to create an ATS-friendly Resume and Cover Letter.
    """
    base_prompt = f"""
    You are an elite HR Recruiter and ATS (Applicant Tracking System) Expert.
    I need you to optimize my resume details to perfectly match a specific Job Description, ensuring high ATS keyword match rates.
    
    My Current Details & Skills: '{user_details}'
    Target Job Description: '{job_description}'
    
    Please provide a structured output with the following sections:
    1. ATS-OPTIMIZED PROFESSIONAL SUMMARY: A 3-sentence powerful summary tailored to the job.
    2. KEYWORD HIGHLIGHTS: A list of 8-10 critical ATS keywords matched from the job description to include in the resume.
    3. BULLET POINTS FOR EXPERIENCE: Rewrite my skills into 4-5 high-impact bullet points focusing on achievements and metrics.
    4. SHORT COVER LETTER DRAFT: A brief, compelling cover letter opening.
    
    Format the output using clear headings, bullet points, and a highly professional tone. Do not invent fake experiences.
    """
    return base_promptb
