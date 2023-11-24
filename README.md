# Question Paper Generator API

This API allows you to generate question papers based on specified criteria such as total marks and difficulty percentages.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/VedantSharma11/Interactly-task
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

## How to Run

To run the project, follow these steps:

1. **Start the server:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

2. **Access the API guide:**

    Visit `http://localhost:3000` in your web browser or use a tool like `curl`:

    ```bash
    curl http://localhost:3000
    ```

    This will provide you with a guide on how to use the API endpoints.

## API Endpoint

- **POST (/generate-paper)**:  (Generate a question paper by making POST request to this route with the following JSON body)
```
{
    "totalMarks": 100,
    "difficultyPercentages": {
        "Easy": 20,
        "Medium": 50,
        "Hard": 30
    }
}
```

