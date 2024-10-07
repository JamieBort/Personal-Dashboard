from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World again!'

@app.route('/test')
def test_function():
    return {"a":"first","b":"second"}

@app.route('/again')
def again_function():
    return {"a":[0,4,3,1,3],"b":list(("apple", "banana", "cherry"))}