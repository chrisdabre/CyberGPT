function CyberGPT(Input) {
  
    const GPT_API = "<Your API>";
    const BASE_URL = "https://api.openai.com/v1/chat/completions";
  
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GPT_API}`
      };
  
  
    const options = {
        headers,
        method: "GET",
        muteHttpExceptions: true,
          payload: JSON.stringify({
          "model": "gpt-4",
          "messages": [{
            "role": "system",
            "content": "You are a cybersecurity consultant and you help people understand vulnerabilities in an easy way" //change this content parameter as per your liking
          },
          {
            "role": "user",
            "content": Input
          },
          
          ],
          "temperature": 0.5
        })
    }
    const response = JSON.parse(UrlFetchApp.fetch(BASE_URL, options));
    // console.log(response)
    console.log(response.choices[0].message.content);
    return response.choices[0].message.content
  }