import json
import base64


def lambda_handler(event, context):
    encoded_authToken = 'Y2xvdWRvZmR1dHk='
    if 'authorizationtoken' not in event['headers']: 
        return {
            'statusCode': 400,
            'body': json.dumps({"success":False, "message":"Authorization Token NEEDED!!!"})
        }
        
    try:    
        if base64.b64decode(event['headers']['authorizationtoken']) == "cloudofduty" :
            api_url = 'https://wol7eqf274.execute-api.us-east-1.amazonaws.com/upload'
    
            return {
                'statusCode': 200,
                'body': json.dumps({"success":True,"message":"Authenticated Successfully!! Here's your api url", "api_url":api_url})
            }
        else:
            return {
                'statusCode': 400,
                'body': json.dumps({"success":False,"message":"Invalid Authorization Token!!"})
        }
    except:
        return {
                'statusCode': 400,
                'body': json.dumps({"success":False,"message":"Error!! Parsing Authorization Token!!"})
        }
        

    
    