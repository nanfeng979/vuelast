from flask import Flask, jsonify, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_json_data():
    with open('./data.json', 'r', encoding='UTF-8') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run()