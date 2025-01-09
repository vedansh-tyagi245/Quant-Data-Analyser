from flask import Flask, request, jsonify
from flask_cors import CORS
import re;
from datetime import datetime

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
    
# POST route to process CSV data and return the number of rows
@app.route('/process_csv_rows', methods=['POST'])
def process_csv_rows():
    # Get JSON data from the request
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Ensure data is a list of rows (JSON array of objects)
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format. Expected a JSON array of objects."}), 400

    # Get the number of rows in the data
    number_of_rows = len(data)
    
    return jsonify({
        "number_of_rows": number_of_rows
    })

# post route to detect null values
@app.route('/process_csv_null_values', methods=['POST'])
def process_csv_null_values():
    # Get JSON data from the request
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Ensure data is a list of rows (JSON array of objects)
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format. Expected a JSON array of objects."}), 400

    # Check for null values (None in Python) in any of the rows
    null_values_found = False

    for row in data:
        for key, value in row.items():
            if value is None or value == "":  # If value is None, it's a null value in Python
                null_values_found = True
                break

    # Return response based on whether null values were found
    if null_values_found:
        return jsonify({"message": "Null value(s) found in the data."}), 200
    else:
        return jsonify({"message": "No null values found in the data."}), 200
    
@app.route('/process_csv_remove_null_values', methods=['POST'])
def process_csv_remove_null_values():
    # Get JSON data from the request
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Ensure data is a list of rows (JSON array of objects)
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format. Expected a JSON array of objects."}), 400

    # Filter out rows with any null (None) or empty values ("")
    cleaned_data = []
    
    for row in data:
        # Check if the row contains any null or empty values
        if not any(value is None or value == "" for value in row.values()):
            cleaned_data.append(row)

    # Return the cleaned data
    return jsonify({
        "cleaned_data": cleaned_data
    })

@app.route('/process_csv_clean_numeric_fields', methods=['POST'])
def process_csv_clean_numeric_fields():
    import re  # Ensure re module is imported

    # Get JSON data from the request
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Ensure data is a list of rows (JSON array of objects)
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format. Expected a JSON array of objects."}), 400

    # Fields to clean
    numeric_fields = ['Open', 'Low', 'High', 'Close', 'Volume']

    # Function to clean a value
    def clean_numeric(value):
        if isinstance(value, str):
            # Remove unwanted characters and extract numeric value (only digits, '.' and '-')
            cleaned_value = re.sub(r'[^\d.-]', '', value)  # Allow only digits, '.' and '-'
            try:
                return float(cleaned_value) if cleaned_value else None
            except ValueError:
                return None
        elif isinstance(value, (int, float)):
            return value
        return None  # If the value can't be converted, return None

    # Clean the data
    cleaned_data = []
    for row in data:
        cleaned_row = row.copy()  # Work on a copy to avoid modifying the original
        for field in numeric_fields:
            if field in cleaned_row:
                cleaned_row[field] = clean_numeric(str(cleaned_row[field]))
        cleaned_data.append(cleaned_row)

    # Return the cleaned data only
    return jsonify({"cleaned_data": cleaned_data})

@app.route('/process_csv_convert_date_format', methods=['POST'])
def process_csv_convert_date_format():
    from datetime import datetime

    # Get JSON data from the request
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Ensure data is a list of rows (JSON array of objects)
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format. Expected a JSON array of objects."}), 400

    # Function to convert date format
    def convert_date_format(value):
        if isinstance(value, str):
            # Replace '/' with '-' to standardize separators
            standardized_value = value.replace('-', '/').strip()
        return standardized_value  # Return the value unchanged if it's not a string or doesn't match any format

    # Convert the data
    converted_data = []
    for row in data:
        converted_row = row.copy()  # Work on a copy to avoid modifying the original
        for key, value in converted_row.items():
            if isinstance(value, str):
                converted_row[key] = convert_date_format(value)
        converted_data.append(converted_row)

    # Return the converted data only
    return jsonify({"converted_data": converted_data})

@app.route('/process_csv_convert_date_format_2', methods=['POST'])
def process_csv_convert_date_format_conversion():
    # Get JSON data from the request
    data = request.get_json()

    if not data:
        return jsonify({"error": "No data provided"}), 400

    # Ensure data is a list of rows (JSON array of objects)
    if not isinstance(data, list):
        return jsonify({"error": "Invalid data format. Expected a JSON array of objects."}), 400

    # Function to check if a date is in MM-DD-YYYY format
    def is_mm_dd_yyyy(date_str):
        try:
            datetime.strptime(date_str, '%m/%d/%Y')
            return True
        except ValueError:
            return False

    # Function to convert MM-DD-YYYY to DD-MM-YYYY
    def convert_mm_dd_to_dd_mm(date_str):
        date_obj = datetime.strptime(date_str, '%m/%d/%Y')
        return date_obj.strftime('%d/%m/%Y')

    # Check date format for each row in the first column (assuming the first column contains date values)
    first_row = data[0]
    all_dates_are_mm_dd = True
    column_name = None

    # Identify the column with dates and verify if all dates are in MM-DD-YYYY
    for key, value in first_row.items():
        if isinstance(value, str) and is_mm_dd_yyyy(value):
            column_name = key
            for row in data:
                date_value = row.get(key)
                if not is_mm_dd_yyyy(date_value):
                    all_dates_are_mm_dd = False
                    break
            break

    if column_name is None:
        return jsonify({"error": "No valid date column found."}), 400

    # If even one date is not in MM-DD-YYYY, assume the column is in DD-MM-YYYY
    if all_dates_are_mm_dd:
        # Convert the entire column from MM-DD-YYYY to DD-MM-YYYY
        for row in data:
            date_value = row[column_name]
            row[column_name] = convert_mm_dd_to_dd_mm(date_value)

    # Return the converted data
    return jsonify({"converted_data": data})


# Run the app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
