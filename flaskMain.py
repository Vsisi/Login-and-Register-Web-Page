from flask import Flask, render_template, make_response,  send_from_directory, session, redirect, url_for, request
from constant import PASSWORD, USER_NAME
from loginRelated import loginRelatedApp

app = Flask(__name__)
app.register_blueprint(loginRelatedApp, url_prefix="/")
app.secret_key = 'mytestsecret_key'
app.jinja_env.variable_start_string = '[['
app.jinja_env.variable_end_string = ']]'


@app.route('/')
def home():
    if USER_NAME in session: #already logged in 
        return render_template("home.html")
    else: #not logged in yet
        return redirect(url_for('loginRelatedApp.login'))

#device status page
@app.route("/Device Status")
def device():
    return "Hello world"

#pwa service worker
@app.route('/serviceWorker.js')
def serviceWorker():
    response = make_response(
        send_from_directory(directory='./static/js', path="serviceWorker.js")
    )
    response.headers['Content-Type'] = 'application/javascript'
    return response

if __name__ == '__main__':
    app.run(debug=True)
