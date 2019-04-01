'''
#linear regression
import tensorflow as tf

#data
x = [1,2,3]
y = [1,2,3]
W = tf.Variable(tf.random_normal([1]))
b = tf.Variable(tf.random_normal([1]))

hy = x * W + b

cost = tf.reduce_mean(tf.square(hy-y))

#cost minimize
optimizer = tf.train.GradientDescentOptimizer(learning_rate=0.01)
train = optimizer.minimize(cost)

sess = tf.Session()
sess.run(tf.global_variables_initializer())

for step in range(2001):
    sess.run(train)
    if step % 20 == 0:
        print(step , sess.run(cost),sess.run(W),sess.run(b))


import tensorflow as tf
x = [1,2,3,4,5,6,7]
y = [25000,55000,75000,110000,128000,155000,180000]
w = tf.Variable(tf.random_uniform([1],-100,100))
b = tf.Variable(tf.random_uniform([1],-100,100))

X = tf.placeholder(tf.float32)
Y = tf.placeholder(tf.float32)

H = w * X + b

cost = tf.reduce_mean(tf.square(H - Y))

optimizer = tf.train.GradientDescentOptimizer(learning_rate = 0.01)

train = optimizer.minimize(cost)

init = tf.global_variables_initializer()

sess = tf.Session()
sess.run(init)
for i in range(2000):
    sess.run(train,feed_dict={X:x , Y : y})
    if i % 20 == 0:
        print(i,sess.run(cost,feed_dict={X:x , Y:y}), sess.run(w) , sess.run(b))

print(sess.run(H,feed_dict={X:[8]}))
'''