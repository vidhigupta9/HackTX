# install with -> pip install streamlit
# run with -> streamlit run main.py
import streamlit as st
import random
import pandas as pd
import requests

# Displaying text
st.title("Demoing streamlit widgets")
st.header("Displaying Python variables")

my_variable = 10
st.write(my_variable)

# Dictionary of data
data = {"first_name": "John", "last_name": "Doe"}
st.write(data)

# A list of 10 random integers between 0 and 10
data = [random.randint(0, 10) for i in range(10)]
st.table(data)
st.bar_chart(data)

# A dictionary of random x and y coordinates for a time plot
data = {"x": [1, 2, 3, 4, 5], "y": [1, 4, 9, 16, 25]}
st.line_chart(data)

image_url ="https://cybersecurity.umbc.edu/files/2019/11/Campus-airial-Picture1.png"
st.image(image_url)

# lat and long of UM baltimore county in a dictionary
data = {"lat": 39.2557, "lon": -76.7110}
df = pd.DataFrame([data])
st.map(df)

# https://docs.streamlit.io/library/api-reference/widgets

X = st.number_input("X", step=1)
Y = st.select_slider("Y", range(0, 10))

show_balloons = st.checkbox("Show balloons?")
if st.button("Add"):
    st.write(f" Your answer is {X + Y}")
    if show_balloons:
        st.balloons()

# API URL
URL = "https://api.agify.io"

name = st.text_input("Enter your name: ")

# input params
PARAM = {"name":name}

# Get the result from the API
res = requests.get(url=URL, params=PARAM)
data = res.json()

if st.button("Calculate Age"):
    st.write(f"{data['name']} is {data['age']} years old.")