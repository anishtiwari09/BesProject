export const visitorUserDetailsTemplate = (
  userDetails,
  type = "New Visitor Registered"
) => {
  let userStr = "";

  for (let key in userDetails) {
    let temp = `<li><strong>${key}:</strong> ${userDetails[key]}</li>`;
    userStr += temp;
  }

  return `


<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td align="center" style="background-color: #007BFF; color: #ffffff; padding: 10px 0; border-radius: 5px 5px 0 0;">
                            <h1>${type}</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                          
                           
                            <p style="font-size: 16px; line-height: 1.5;">
                                Here are the new user details:
                            </p>
                            <ul style="font-size: 16px; line-height: 1.5;">
                               ${userStr}
                              
                            </ul>
                      
                         
                        </td>
                    </tr>
                 
                </table>
            </td>
        </tr>
    </table>
</body>
`;
};
