/* eslint-disable react/no-unescaped-entities */

const Disclosure = () => {
  return (
    <div className="flex flex-col w-full h-auto  px-10">
      <div className="flex justify-center items-center">
        <h3 className="-mt-24 underline text-white font-extrabold text-4xl capitalize ">
          Responsible Disclosure Policy
        </h3>
      </div>
      <div className="flex flex-col justify-start items-start my-16 px-12">
        <p className="text-white text-2xl font-normal">
          At Zepto, we take the security of our systems seriously, and it is our
          constant endeavor to make our website a safe place for our customers
          to browse. However, in the rare case when some security researcher or
          member of the general public identifies a vulnerability in our
          systems, and responsibly shares the details of it with us, we
          appreciate their contribution, work closely with them to address such
          vulnerabilities with urgency, and if they want, publicly acknowledge
          their contribution. Zepto reserves all the rights to validate the
          reports to be valid or not on the basis of impact of vulnerability.
        </p>
        <p className="text-white text-2xl font-bold mb-4">
          To be eligible for recognition, you must
        </p>
        <li className="mb-4 list-disc text-white text-2xl pl-8 font-normal">
          Be the first person to responsibly disclose the bug.
        </li>
        <li className="mb-4 text-white list-disc pl-8 text-2xl font-normal">
          Report a bug that could compromise our users' private data, circumvent
          the system's protections, or enable access to a system within our
          infrastructure.
        </li>
        <p className="mb-4 text-white text-2xl font-bold">
          Types of Recognition
        </p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Hall of Fame
        </li>
        <p className="mb-4 text-white text-2xl font-bold">
          Rules of Engagement
        </p>
        <p className="mb-4 text-white text-2xl font-normal">
          You give us reasonable time to investigate and mitigate a
          vulnerability that you report.
        </p>
        <p className="mb-4 text-white text-2xl font-normal">
          Please refrain from accessing sensitive information (by using a test
          account and/or system), performing actions that may negatively affect
          other Zepto users (denial of service), or sending reports from
          automated tools.
        </p>
        <p className="mb-4 text-white text-2xl font-normal">
          You do not exploit a security vulnerability that you discover for any
          reason. (This includes demonstrating additional risk, such as
          attempted compromise of sensitive company data or probing for
          additional issues.)
        </p>
        <p className="mb-4 text-white text-2xl font-normal">
          Violating any laws or breaching any agreements in order to discover
          vulnerabilities
        </p>
        <p className="mb-4 text-white text-2xl font-normal">
          You do not publicly disclose details of a security vulnerability that
          you've reported without Zepto's permission.
        </p>
        <p className="mb-4 text-white text-2xl font-bold">Programme terms</p>
        <p className="mb-4 text-white text-2xl font-normal">
          We recognise security researchers who help us to keep users safe by
          reporting vulnerabilities in our services. Recognition for such
          reports are entirely at Zepto’s discretion, based on risk, impact and
          other factors. For recognition in Zepto’s Hall of Fame, you first need
          to meet the following requirements:
        </p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Adhere to our Responsible Disclosure Policy
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Report a security bug: identify a vulnerability in our services or
          infrastructure which creates a security or privacy risk. (Note that
          Zepto ultimately determines the risk of an vulnerability, and that
          many software bugs are not security vulnerabilities.)
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Your report must describe a problem involving one of the products or
          services listed under "Scope".
        </li>
        <li className="mb-4 text-white text-2xl pl-8 li-disc font-normal">
          We specifically exclude certain types of potential security
          vulnerabilities; these are listed under "Exclusions”.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          If you inadvertently cause a privacy violation or disruption (such as
          accessing account data, service configurations or other confidential
          information) while investigating an vulnerability, make sure that you
          disclose this in your report.
        </li>

        <p className="mb-4 text-white text-2xl font-normal">
          In turn, we will follow these guidelines when evaluating reports under
          our responsible disclosure programme:
        </p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          We investigate and respond to all valid reports. Due to the volume of
          reports that we receive, however, we prioritise evaluations based on
          risk and other factors, and it may take some time before you receive a
          reply.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          We determine recognition in hall of fame based on a variety of
          factors, including (but not limited to) impact, ease of exploitation
          and quality of the report. Note that extremely low-risk
          vulnerabilities may not qualify for hall of fame at all.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          In the event of duplicate reports, we give recognition to the first
          person to submit a vulnerability. (Zepto determines duplicates and may
          not share details on the other reports.)
        </li>
        <p className="mb-4 text-white text-2xl font-normal">
          Note that your use of Zepto services including for the purposes of
          this programme, is subject to Zepto’s Terms and Policies. We may
          retain any communications about security vulnerabilities that you
          report for as long as we deem necessary for programme purposes, and we
          may cancel or modify this programme at any time.
        </p>
        <p className="mb-4 text-white text-2xl font-bold">Scope</p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Android Zepto
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          iOS Zepto
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Android Delivery Partner Zepto
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          iOS Business Zepto
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          https://zeptonow.com
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          https://zepto.co.in
        </li>
        <p className="mb-4 text-white text-2xl font-bold">
          How to Report a Vulnerability?
        </p>
        <p className="mb-4 text-white text-2xl font-normal">
          If you happen to have identified a vulnerability on any of our web or
          mobile app properties, we request you to follow the steps outlined
          below:
        </p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Please submit the vulnerability report form with the necessary details
          to recreate the vulnerability scenario. This may include screenshots,
          videos or simple text instructions.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          If possible, share with us your contact details (phone number), so
          that our security team can reach out to you if further inputs are
          needed to identify or close the problem.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          If the identified vulnerability can be used to potentially extract
          information of our customers or systems, or impair our system’s
          ability to function normally, then please refrain from actually
          exploiting such a vulnerability. This is absolutely necessary for us
          to consider your disclosure a responsible one.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          While we appreciate the inputs of Whitehat hackers, we may take legal
          recourse if the identified vulnerabilities are exploited for unlawful
          gains or getting access to restricted customer or system information
          or impairing our systems.
        </li>
        <p className="mb-4 text-white text-2xl font-bold">
          Report a Vulnerability
        </p>
        <p className="mb-4 text-white text-2xl font-normal">
          Send an email to security@zeptonow.com
        </p>
        <p className="mb-4 text-white text-2xl font-bold">
          Qualifying Vulnerabilities
        </p>
        <p className="mb-4 text-white text-2xl font-normal">
          Any design or implementation issue that is reproducible and
          substantially affects the security of Zepto users is likely to be in
          scope for the program. Common examples include:
        </p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Injections
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Cross Site Scripting (XSS)
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Cross Site Request Forgery (CSRF)
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Remote Code Execution (RCE)
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Authentication/Authorisation flaws
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Domain take-over vulnerabilities
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Able to take-over other Zepto user accounts (while testing, use your
          own another test account to validate)
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Any vulnerability that can affect the Zepto Brand, user data and
          financial transactions
        </li>
        <p className="mb-4 text-white text-2xl font-bold">Exclusions</p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Vulnerabilities found through automated testing
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          "Scanner output" or scanner-generated reports
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          "Publicly released CVE’s or 0-days in internet software within 90 days
          of their disclosure
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          "Advisory" or "Informational" reports that do not include any Zepto
          testing or context
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Vulnerabilities requiring MITM or physical access to the victim’s
          unlocked device.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Denial of Service attacks
        </li>
        <p className="mb-4 text-white text-2xl pl-14 font-normal">
          - SPF and DKIM issues
        </p>
        <p className="mb-4 text-white text-2xl pl-14 font-normal">
          - Content injection
        </p>
        <p className="mb-4 text-white text-2xl pl-14 font-normal">
          - Hyperlink injection in emails
        </p>
        <p className="mb-4 text-white text-2xl pl-14 font-normal">
          - IDN homograph attacks
        </p>
        <p className="mb-4 text-white text-2xl pl-14 font-normal">
          - RTL Ambiguity
        </p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Content Spoofing
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Vulnerabilities relating to Password Policy
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Full-Path Disclosure on any property
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Version number information disclosure
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Third-party applications on the Zepto Application directory
          (identified by the existence of a "Report this app" link on the app's
          page). Please report vulnerabilities with these services to the
          creator of that specific application.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Clickjacking on pre-authenticated pages, or the non-existence of
          X-Frame-Options, or other non-exploitable clickjacking vulnerabilities
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          CSRF-able actions that do not require authentication (or a session) to
          exploit Reports related to the following security-related headers
        </li>
        <p className="mb-4 text-white text-2xl pl-12 font-normal">
          - Strict Transport Security (HSTS)
        </p>
        <p className="mb-4 text-white text-2xl pl-12 font-normal">
          - XSS mitigation headers (X-Content-Type and X-XSS-Protection)
        </p>
        <p className="mb-4 text-white text-2xl pl-12 font-normal">
          - X-Content-Type-Options
        </p>
        <p className="mb-4 text-white text-2xl pl-12 font-normal">
          - Content Security Policy (CSP) settings (excluding nosniff in an
          exploitable scenario)
        </p>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Bugs that do not represent any security risk
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Security bugs in third-party applications or services built on the
          Zepto API - please report them to the third party that built the
          application or service
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Security bugs in software related to an acquisition for a period of 90
          days following any public announcement
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          HTTP TRACE or OPTIONS methods enabled
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Non-sensitive (i.e., non-session) cookies missing the Secure or
          HttpOnly flags
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Tap jacking
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Mobile client issues require a rooted device and/or outdated OS
          version or SSL pinning issues.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Subdomain takeovers without supporting evidence
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Missing best practices in SSL/TLS configuration.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          The Vulnerabilities that cannot be used to exploit other users or
          Zepto -- e.g., self-XSS or having a user paste JavaScript into the
          browser console
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Open ports without an accompanying proof-of-concept demonstrating
          vulnerability
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Vulnerabilities in the whitehat report form
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Submitting complaints about services
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Making fraud reports and/or suspicions of fraud reports from false
          mail or phishing e-mails
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Reporting viruses.
        </li>
        <li className="mb-4 text-white text-2xl pl-8 list-disc font-normal">
          Submitting complaints or questions about the availability of the
          website.
        </li>
        <p className="mb-4 text-white text-2xl font-bold">Acknowledgements</p>
        <p className="mb-4 text-white text-2xl font-normal">
          We do not have a bounty/cash reward program for such disclosures, but
          we express our gratitude for your contribution in different ways. For
          genuine ethical disclosures, we would be glad to publicly acknowledge
          your contribution in this section on our website. Of course, this will
          be done if you want a public acknowledgement.
        </p>
        <p className="mb-4 text-white text-2xl font-bold">Hall Of Fame</p>
        <p className="mb-4 text-white text-2xl font-normal">
          Zepto thanks the following People for finding & responsibly disclosing
          security vulnerabilities in Zepto owned Apps, products or services. We
          are grateful for their contribution & efforts towards the security of
          Zepto.
        </p>
      </div>
    </div>
  );
};

export default Disclosure;
