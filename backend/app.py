from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return "Hello, cross-origin-world!"

@app.route('/test')
def test_function():
    return {"a":"first","b":"second"}

@app.route('/again')
def again_function():
    return {"a":[0,4,3,1,3],"b":list(("apple", "banana", "cherry"))}