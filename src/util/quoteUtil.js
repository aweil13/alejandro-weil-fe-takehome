// Post request to coterie api call

export const getQuote = application => (
    $.ajax({
      url: `https://api-sandbox.coterieinsurance.com/v1/commercial/applications`,
      method: "POST",
      authorization: "token 73920c6f-d530-419c-87b3-4f4762e05e9d",
      data: {application}
    })
)