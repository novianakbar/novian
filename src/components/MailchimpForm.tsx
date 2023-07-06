import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";
interface INewsletter {
    status: string | null
    message: string | Error | null
    subscribe: (details: any) => void
}

export const MailchimpForm = () => {
    const postUrl = `${process.env.NEXT_PUBLIC_MAILCHIMP_URL}?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`;

    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }: any) => (
                    <Newsletter
                        status={status}
                        message={message}
                        onValidated={(formData: any) => subscribe(formData)}
                    />
                )}
            />
        </>
    )
}
