from django.shortcuts import render

def home(request):
    result = None
    error = None

    if request.method == 'POST':
        try:
            num1 = float(request.POST.get('num1', 0))
            num2 = float(request.POST.get('num2', 0))
            operation = request.POST.get('operation')

            if operation == 'add':
                result = num1 + num2
            elif operation == 'subtract':
                result = num1 - num2
            elif operation == 'multiply':
                result = num1 * num2
            elif operation == 'divide':
                if num2 == 0:
                    error = "Cannot divide by zero!"
                else:
                    result = num1 / num2
            else:
                error = "Invalid operation."
        except ValueError:
            error = "Please enter valid numbers."

    return render(request, 'calcapp/index.html', {'result': result, 'error': error})
