export const getCompanies = () => {
    return new Promise(() => {
        setTimeout(() => [
            {
                "sfdcCompanyId": "0015A00002EibgnQAB",
                "leadName": "Alex",
                "leadId": "0055A000008VitRQAA",
                "sfdcCompanyName": "CRED",
            },
            {
                "sfdcCompanyId": "0015A00002IVzshQAD",
                "leadName": "Alex",
                "leadId": "0055A000008VitRQAA",
                "sfdcCompanyName": "Ramp Business Corporation",
            },
            {
                "sfdcCompanyId": "0015A00002CQd2SQAT",
                "leadName": "Chris",
                "leadId": "0055A000008VitRQBB",
                "sfdcCompanyName": "Arrcus",
            },
            {
                "sfdcCompanyId": "0015A00002HSNeAQAX",
                "leadName": "Chris",
                "leadId": "0055A000008VitRQBB",
                "sfdcCompanyName": "Prosimo, Inc.",
            }
        ], 1000);
    })
}
