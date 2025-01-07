from flask import Flask, request, jsonify
from flask_cors import CORS

# Create the Flask app
app = Flask(__name__)

# Enable CORS for all routes (including preflight)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def home():
    return jsonify({
        "message": "Welcome to your simple Flask app!"
    })

# POST route to process CSV data
@app.route('/process_csv', methods=['POST'])
def process_csv():
    # Get JSON data from the request
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Ensure data is a list of rows (JSON array of objects)
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format. Expected a JSON array of objects."}), 400

    # Get the column names from the first row
    if len(data) > 0:
        columns = list(data[0].keys())
        return jsonify({
            "number_of_columns": len(columns),
            "column_names": columns
        })
    else:
        return jsonify({
            "number_of_columns": 0,
            "column_names": []
        })

# Run the app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
